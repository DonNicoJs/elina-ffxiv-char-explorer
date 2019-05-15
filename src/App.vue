<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>FFXIV</span>
        <span class="font-weight-light">Char Explorer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat :to="{name: 'home'}">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn flat :to="{name: 'about'}">
        <span class="mr-2">About</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
