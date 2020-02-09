<template>
  <div class="pokemon-icon-container">
    <v-avatar size="96" class="pokemon-icon" @click="openDialog(pokemon.id)">
      <img
        :src="
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
            this.pokemon.id +
            '.png'
        "
      />
    </v-avatar>
    <div class="pokemon-name">{{ this.pokemon.name }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "pokemon-icon",

  props: {
    pokemon: Object
  },

  methods: {
    ...mapActions(["openDialog"])
  }
};
</script>

<style scoped>
.pokemon-icon:hover {
  background-color: skyblue;
  cursor: pointer;
}
.pokemon-icon-container {
  max-width: 96px;
  display: inline-block;
}
.pokemon-name {
  font-family: "pokemon-font";
  font-size: 10px;
  text-align: center;
}
</style>
