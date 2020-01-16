import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    sledId: null
  },
  getters: {
    getSledId (state) {
      return state.sledId
    },
  },
  mutations: {
    setSledId(state,data) {
      state.sledId = data
    }
  },
  actions: {
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]

});