<template>
  <v-dialog
    v-model="this.isOpen"
    persistent
    v-if="this.isOpen"
    max-width="400px"
  >
    <v-card>
      <v-card-title style="font-family:'pokemon-font'">
        <v-avatar size="96">
          <img
            :src="
              'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/' +
                this.getImgName(this.pokemon.id) +
                'MS.png'
            "
          />
        </v-avatar>
        {{ pokemon.name }}
      </v-card-title>

      <v-card-text>
        <v-carousel hide-delimiter-background hide-delimiters height="400px">
          <v-carousel-item>
            <v-img
              :src="
                'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' +
                  this.getImgName(this.pokemon.id) +
                  '.png'
              "
            ></v-img>
          </v-carousel-item>

          <v-carousel-item>
            <v-subheader light>タイプ</v-subheader>
            <v-avatar size="72" v-for="t in pokemon.type" :key="t">
              <img :src="require('../assets/types/' + t + '.png')" />
            </v-avatar>
            <v-divider light></v-divider>
            <v-subheader light>種族値</v-subheader>
            <div v-for="(val, name) in pokemon.base" :key="name">
              <div max-height="10px;" style="font-size:10px">
                {{ getJapanese(name) }}
              </div>
              <v-progress-linear
                :value="(val / 255) * 100"
                color="pink"
                height="15"
              >
                <template>
                  <strong>{{ val }}</strong>
                </template>
              </v-progress-linear>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="closeDialog()" color="red" block>Close</v-btn>
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
    ...mapGetters(["isOpen", "pokemon"])
  },
  methods: {
    getImgName: id => ("000" + id).slice(-3),
    ...mapActions(["openDialog", "closeDialog"]),
    getJapanese: name => {
      const map = {
        HP: "HP",
        Attack: "こうげき",
        Defense: "ぼうぎょ",
        SPAttack: "とくこう",
        SPDefense: "とくぼう",
        Speed: "すばやさ"
      };
      return map[name];
    }
  }
};
</script>
