<template>
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
</style>
