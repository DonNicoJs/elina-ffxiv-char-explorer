import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servers: []
  },
  mutations: {
    SET_SERVERS: (state, list) => {
      state.servers = list;
    }
  },
  actions: {
    async fetchServers({ commit }) {
      const { data } = await axios.get("https://xivapi.com/servers");
      commit("SET_SERVERS", data);
    }
  }
});
