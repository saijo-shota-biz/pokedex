<template>
  <div class="pokemon-icon-container">
    <v-avatar size="96" class="pokemon-icon" @click="openDialog(pokemon.id)">
      <img
        :src="
          require('../assets/sprites/' +
            this.getImgName(this.pokemon.id) +
            '.png')
        "
        :alt="this.pokemon.name"
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
    getImgName: id => ("000" + id).slice(-3) + "MS",
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
