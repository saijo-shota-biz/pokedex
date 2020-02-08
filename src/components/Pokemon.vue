<template>
  <v-dialog
    v-model="this.isOpen"
    persistent
    max-width="30vw"
    v-if="this.isOpen"
  >
    <v-card>
      <v-card-title style="font-family:'pokemon-font'">
        <v-avatar
          size="96"
          class="pokemon-icon"
          @click="openDialog(pokemon.id)"
        >
          <img
            :src="
              require('../assets/sprites/' +
                this.getImgName(this.pokemon.id) +
                'MS.png')
            "
          />
        </v-avatar>
        {{ pokemon.name }}
      </v-card-title>
      <v-img
        :src="
          require('../assets/thumbnails/' +
            this.getImgName(this.pokemon.id) +
            '.png')
        "
        max-width="30vw"
      ></v-img>
      <v-card-actions>
        <v-btn
          @click="openDialog(pokemon.id - 1)"
          :disabled="isFirst"
          width="32%"
          color="teal"
          >Prev</v-btn
        >
        <v-btn @click="closeDialog()" width="30%" color="red">Close</v-btn>
        <v-btn
          @click="openDialog(pokemon.id + 1)"
          :disabled="isLast"
          width="32%"
          color="teal"
          >Next</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Pokemon",

  data: () => ({}),

  computed: {
    ...mapGetters(["isOpen", "pokemon", "isFirst", "isLast"])
  },
  methods: {
    getImgName: id => ("000" + id).slice(-3),
    ...mapActions(["openDialog", "closeDialog"])
  }
};
</script>
