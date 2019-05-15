import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servers: [],
    // this does not need to an array, we want to store a single selection:
    // selectedServer: []
    selectedServer: null
  },

  getters: {
    getServersList: state => state.servers,
    getChoosedServer: state => state.selectedServer
  },

  mutations: {
    SET_SERVERS: (state, list) => {
      state.servers = list;
    },

    SET_CHOOSE_SERVER: (state, server) => {
      // since this is a single selection we can just assign it
      // state.selectedServer.splice(0, server);
      state.selectedServer = server;
    }
  },

  actions: {
    async fetchServers({ commit }) {
      const { data } = await axios.get("https://xivapi.com/servers");
      commit("SET_SERVERS", data);
    },

    changeServer(context, server) {
      context.commit("SET_CHOOSE_SERVER", server);
    }
  }
});
