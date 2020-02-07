<template>
  <div>
    <Pokemon v-for="n in 10" :key="n"></Pokemon>
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon.vue";

export default {
  name: "pokemon-list",
  components: {
    Pokemon
  }
};
</script>
