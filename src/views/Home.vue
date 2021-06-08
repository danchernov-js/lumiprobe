<template>
  <div class="home">
    <div class="report">
      <table v-if="getRows.length !== 0" class="report-table">
        <tr>
          <th>Page</th>
          <th>Role Key</th>
          <th>type</th>
          <th>status</th>
        </tr>
        <tr v-for="row in getRows" :key="row.id">
          <td>{{ row.page }}</td>
          <td>{{ row.roleKey }}</td>
          <td>{{ row.type }}</td>
          <td :class="{ redResult: !row.match }">
            <span v-if="row.status !== -1">{{ row.status }}</span>
            <i v-if="row.status === -1">pending...</i>
          </td>
        </tr>
      </table>
      <a href="#" @click="start">Start</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { TaskQueue } from "cwait";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      queue: new TaskQueue(Promise, 1),
    };
  },
  computed: mapGetters(["getRows"]),
  methods: {
    start() {
      let sections = this.$store.state.rolesTree.data.web_sections;
      let taskContexts = [];

      for (let section of sections) {
        let sectionRoles = section.section_roles;
        let gql = section.gql;

        for (let sectionRole of sectionRoles) {
          for (let gqlItem of gql) {
            let row = {
              id: `${section.id}_${sectionRole.id}_${gqlItem.type}`,
              page: section.name,
              roleKey: sectionRole.role.key,
              type: gqlItem.type,
              status: -1,
              match: true,
            };

            this.$store.commit("addRow", row);
            taskContexts.push({ row, gqlItem, sectionRole, section });
          }
        }
      }

      let self = this;

      Promise.all(
        taskContexts.map(
          self.queue.wrap(
            async (context) =>
              await self.checkRole(
                context.row,
                context.gqlItem,
                context.sectionRole,
                context.section
              )
          )
        )
      );
    },
    checkRole(row, gqlItem, sectionRole, section) {
      let matchPredicate = (allow, status) =>
        (allow && status === 200) || (!allow && status !== 200);
      let self = this;

      return axios
        .post(
          gqlItem.path,
          { roleId: sectionRole.role_id, sectionId: section.id },
          {
            baseURL: "https://jsonplaceholder.typicode.com/todos",
            validateStatus: (status) => true,
          }
        )
        .then(function (response) {
          let match = true;
          switch (gqlItem.type) {
            case "insert":
              match = matchPredicate(sectionRole.allow_insert, response.status);
              break;
            case "delete":
              match = matchPredicate(sectionRole.allow_delete, response.status);
              break;
            case "update":
              match = matchPredicate(sectionRole.allow_update, response.status);
              break;
            case "select":
              match = matchPredicate(sectionRole.allow_select, response.status);
              break;
            default:
              console.log("Unknown action " + gqlItem.type);
          }
          self.$store.commit("setCheckResult", {
            rowId: row.id,
            match,
            status: response.status,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.report {
  &-table {
    border-spacing: 0px;

    & td,
    & th {
      border: thin solid black;
      padding: 5px;
      margin: 0;
    }
  }
}

.redResult {
  background: red;
}
</style>
