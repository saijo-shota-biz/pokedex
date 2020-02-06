<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Pokemon />
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon.vue";

export default {
  name: "home",
  components: {
    Pokemon
  }
};
</script>
