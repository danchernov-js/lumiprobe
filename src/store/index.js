import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolesTree: {
      data: {
        web_sections: [
          {
            id: 17,
            name: "Roles",
            gql: [
              {
                path: "/test/test/mMuttaion.js",
                type: "insert",
              },
              {
                path: "/test/test/mMuttaion.js",
                type: "delete",
              },
              {
                path: "/test/test/mMuttaion.js",
                type: "update",
              },
              {
                path: "/test/test/mMuttaion.js",
                type: "select",
              },
            ],
            section_roles: [
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 66,
                role_id: 1,
                role: {
                  id: 1,
                  key: "ROLE_ADMIN",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 67,
                role_id: 3,
                role: {
                  id: 3,
                  key: "ROLE_PRICE_EDITOR",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 68,
                role_id: 2,
                role: {
                  id: 2,
                  key: "ROLE_USER",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 69,
                role_id: 4,
                role: {
                  id: 4,
                  key: "ROLE_HELPCENTRE_WRITER",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 70,
                role_id: 5,
                role: {
                  id: 5,
                  key: "ROLE_OLIGO_CONTENT_MANAGER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 71,
                role_id: 6,
                role: {
                  id: 6,
                  key: "ROLE_CONTENT_MANAGER",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 72,
                role_id: 7,
                role: {
                  id: 7,
                  key: "ROLE_TRANSLATOR",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: false,
                allow_delete: true,
                id: 73,
                role_id: 8,
                role: {
                  id: 8,
                  key: "ROLE_SALES_MANAGER",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 74,
                role_id: 9,
                role: {
                  id: 9,
                  key: "ROLE_STOCK_MANAGER",
                },
              },
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 75,
                role_id: 10,
                role: {
                  id: 10,
                  key: "ROLE_MANAGER",
                },
              },
            ],
          },
          {
            id: 32,
            name: "Shop Settings",
            gql: [
              {
                path: "/test/test/mMuttaion.js",
                type: "insert",
              },
              {
                path: "/test/test/mMuttaion.js",
                type: "delete",
              },
              {
                path: "/test/test/mMuttaion.js",
                type: "update",
              },
              {
                path: "/test/test/mMuttaion.js",
                type: "select",
              },
            ],
            section_roles: [
              {
                allow_update: true,
                allow_select: true,
                allow_insert: true,
                allow_delete: true,
                id: 216,
                role_id: 1,
                role: {
                  id: 1,
                  key: "ROLE_ADMIN",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 217,
                role_id: 3,
                role: {
                  id: 3,
                  key: "ROLE_PRICE_EDITOR",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 218,
                role_id: 2,
                role: {
                  id: 2,
                  key: "ROLE_USER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 219,
                role_id: 4,
                role: {
                  id: 4,
                  key: "ROLE_HELPCENTRE_WRITER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 220,
                role_id: 5,
                role: {
                  id: 5,
                  key: "ROLE_OLIGO_CONTENT_MANAGER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 221,
                role_id: 6,
                role: {
                  id: 6,
                  key: "ROLE_CONTENT_MANAGER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 222,
                role_id: 7,
                role: {
                  id: 7,
                  key: "ROLE_TRANSLATOR",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 223,
                role_id: 8,
                role: {
                  id: 8,
                  key: "ROLE_SALES_MANAGER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 224,
                role_id: 9,
                role: {
                  id: 9,
                  key: "ROLE_STOCK_MANAGER",
                },
              },
              {
                allow_update: false,
                allow_select: false,
                allow_insert: false,
                allow_delete: false,
                id: 225,
                role_id: 10,
                role: {
                  id: 10,
                  key: "ROLE_MANAGER",
                },
              },
            ],
          },
        ],
      },
    },
    rows: [],
  },
  mutations: {
    addRow(state, row) {
      state.rows.push(row);
    },
    setCheckResult(state, data) {
      for (let row of state.rows) {
        if (row.id === data.rowId) {
          row.match = data.match;
          row.status = data.status;
        }
      }
    },
  },
  actions: {},
  getters: {
    getRows(state) {
      return state.rows;
    },
  },
});
