<template>
  <div class="pokemon-icon-container">
    <v-avatar size="96" class="pokemon-icon">
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
export default {
  name: "pokemon-icon",

  props: {
    pokemon: Object
  },

  methods: {
    getImgName: id => ("000" + id).slice(-3) + "MS"
  }
};
</script>

<style scoped>
.pokemon-icon:hover {
  background-color: skyblue;
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
