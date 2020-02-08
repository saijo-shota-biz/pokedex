<template>
  <div>
    <PokemonIcon
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></PokemonIcon>
    <Pokemon></Pokemon>
  </div>
</template>

<script>
import PokemonIcon from "@/components/PokemonIcon.vue";
import Pokemon from "@/components/Pokemon.vue";
import { mapGetters } from "vuex";

export default {
  name: "pokemon-list",
  components: {
    PokemonIcon,
    Pokemon
  },
  computed: {
    ...mapGetters(["pokemons"])
  }
};
</script>
