<template>
  <div>
    <PokemonIcon
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></PokemonIcon>
  </div>
</template>

<script>
import PokemonIcon from "@/components/PokemonIcon.vue";
import { mapGetters } from "vuex";

export default {
  name: "pokemon-list",
  components: {
    PokemonIcon
  },
  computed: {
    ...mapGetters(["pokemons"])
  }
};
</script>
