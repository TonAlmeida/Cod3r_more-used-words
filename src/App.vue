<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
      <v-toolbar-title>rr  ee rr rrr</v-toolbar-title>
    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/home.vue'

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
