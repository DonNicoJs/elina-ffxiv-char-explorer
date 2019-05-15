<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <div>
          <v-select :items="serversList" label="Choose your server" v-model="server"></v-select>
          <!-- Let's temporarily add the value from vuex here to debug -->
          {{choosedServer}}
        </div>
        <!-- 
          Exercise 2
          add another form item, an input field with a button that allow the user
          to input a name and click the button to search (we will write this action together), 
          use vuex to store your data
          you can use what you learned in exercise one to build this.
        -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
// EXERCISE 1: create a selection menu that allow the user to select a server:
// https://vuetifyjs.com/en/components/selects
// use the store and build on top of what I've made for you
export default {
  components: {},

  created() {
    this.fetchServers();
  },
  methods: {
    ...mapActions({
      fetchServers: "fetchServers",
      changeServer: "changeServer"
    })
    // this method we do not need
    // NewServer(server) {
    //   this.changeServer(server);
    // }
  },

  computed: {
    ...mapGetters({
      serversList: "getServersList",
      choosedServer: "getChoosedServer"
    }),
    // We are going to use the second form of computed properties,
    // normally computed are READONLY,
    // this way we can specify what happens when we set a computed property value:
    server: {
      // Like this we can specify WHERE the value is taken
      get() {
        return this.choosedServer;
      },
      //  and what to do when the value update
      set(value) {
        this.changeServer(value);
      }
    }
  }
};
</script>
