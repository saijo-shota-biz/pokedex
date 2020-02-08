<template>
  <v-app>
    <v-app-bar app absolute color="red" dark clipped-left>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>ポケモン図鑑</v-toolbar-title>
    </v-app-bar>

    <!-- <v-navigation-drawer app v-model="drawer" clipped>
      <Condition></Condition>
    </v-navigation-drawer> -->

    <v-content>
      <v-container fluid>
        <PokemonList></PokemonList>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";
// import Condition from "@/components/Condition.vue";

export default {
  name: "App",

  components: {
    // Condition,
    PokemonList
  },

  data: () => ({
    drawer: true
  })
};
</script>
