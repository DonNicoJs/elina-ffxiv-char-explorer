<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <div>       
          <v-select
            :items= "serversList"
            label="Choose your server">
          </v-select>
       </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
// EXERCISE 1: create a selection menu that allow the user to select a server: 
// https://vuetifyjs.com/en/components/selects
// use the store and build on top of what I've made for you
export default {
  components: {},
  created () {
    this.fetchServers();
  },
  methods: {
    ...mapActions({
      fetchServers: 'fetchServers'
    })
  },

 computed:{
    ...mapGetters({
      serversList: "getServersList"
    })
  },
};
</script>
