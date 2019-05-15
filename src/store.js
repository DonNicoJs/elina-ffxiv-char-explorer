import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    servers: [],
    // this does not need to an array, we want to store a single selection:
    // selectedServer: []
    selectedServer: null,
    characterName: null,
    characters: []
  },

  getters: {
    getServersList: state => state.servers,
    getChoosedServer: state => state.selectedServer,
    getCharacterName: state => state.characterName,
    getCharacters: state => state.characters
  },

  mutations: {
    SET_SERVERS: (state, list) => {
      state.servers = list;
    },

    SET_CHOOSE_SERVER: (state, server) => {
      // since this is a single selection we can just assign it
      // state.selectedServer.splice(0, server);
      state.selectedServer = server;
    },

    SET_NAME: (state, name) => {
      state.characterName = name;
    },
    SET_CHARACTERS: (state, list) => {
      state.characters = list;
    }
  },

  actions: {
    async fetchServers({ commit }) {
      const { data } = await axios.get("https://xivapi.com/servers");
      commit("SET_SERVERS", data);
    },

    changeServer(context, server) {
      context.commit("SET_CHOOSE_SERVER", server);
    },

    changeCharacterName(context, name) {
      context.commit("SET_NAME", name);
    },
    async searchCharacter({ commit, state }) {
      const params = {
        server: state.selectedServer,
        name: state.characterName
      };
      const { data } = await axios.get("https://xivapi.com/character/search", {
        params
      });
      commit("SET_CHARACTERS", data.Results);
    }
  }
});
