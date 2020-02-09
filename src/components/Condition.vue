<template>
  <div>
    <v-subheader light>検索</v-subheader>

    <div class="container">
      <v-btn block @click="clear">clear</v-btn>
      <v-text-field
        v-model="name"
        label="名前"
        @input="onChange"
      ></v-text-field>

      <v-checkbox label="全選択/解除" v-model="check" hide-details></v-checkbox>

      <v-btn-toggle v-model="types1" multiple @change="onChange">
        <v-btn
          v-for="t in ['Fire', 'Water', 'Grass', 'Electric']"
          :key="t"
          :value="t"
        >
          <v-avatar size="30">
            <img :src="require('../assets/types/' + t + '.png')" />
          </v-avatar>
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle v-model="types2" multiple @change="onChange">
        <v-btn
          v-for="t in ['Flying', 'Fighting', 'Psychic', 'Bug']"
          :key="t"
          :value="t"
        >
          <v-avatar size="30">
            <img :src="require('../assets/types/' + t + '.png')" />
          </v-avatar>
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle v-model="types3" multiple @change="onChange">
        <v-btn
          v-for="t in ['Ice', 'Dragon', 'Rock', 'Ground']"
          :key="t"
          :value="t"
        >
          <v-avatar size="30">
            <img :src="require('../assets/types/' + t + '.png')" />
          </v-avatar>
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle v-model="types4" multiple @change="onChange">
        <v-btn
          v-for="t in ['Normal', 'Poison', 'Ghost', 'Dark']"
          :key="t"
          :value="t"
        >
          <v-avatar size="30">
            <img :src="require('../assets/types/' + t + '.png')" />
          </v-avatar>
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle v-model="types5" multiple @change="onChange">
        <v-btn v-for="t in ['Steel', 'Fairy']" :key="t" :value="t">
          <v-avatar size="30">
            <img :src="require('../assets/types/' + t + '.png')" />
          </v-avatar>
        </v-btn>
      </v-btn-toggle>

      <div style="padding-top:12px"></div>

      <div max-height="10px;" style="font-size:10px">HP</div>
      <v-range-slider
        id="hp"
        max="255"
        min="0"
        step="5"
        thumb-label
        v-model="hp"
        color="pink"
        @end="onChange"
      ></v-range-slider>
      <div max-height="10px;" style="font-size:10px">こうげき</div>
      <v-range-slider
        id="atk"
        max="255"
        min="0"
        step="5"
        thumb-label
        v-model="atk"
        color="pink"
        @end="onChange"
      ></v-range-slider>
      <div max-height="10px;" style="font-size:10px">ぼうぎょ</div>
      <v-range-slider
        id="def"
        max="255"
        min="0"
        step="5"
        thumb-label
        v-model="def"
        color="pink"
        @end="onChange"
      ></v-range-slider>
      <div max-height="10px;" style="font-size:10px">とくこう</div>
      <v-range-slider
        id="spatk"
        max="255"
        min="0"
        step="5"
        thumb-label
        v-model="spatk"
        color="pink"
        @end="onChange"
      ></v-range-slider>
      <div max-height="10px;" style="font-size:10px">とくぼう</div>
      <v-range-slider
        id="spdef"
        max="255"
        min="0"
        step="5"
        thumb-label
        v-model="spdef"
        color="pink"
        @end="onChange"
      ></v-range-slider>
      <div max-height="10px;" style="font-size:10px">すばやさ</div>
      <v-range-slider
        id="spd"
        max="255"
        min="0"
        step="5"
        thumb-label
        v-model="spd"
        color="pink"
        @end="onChange"
      ></v-range-slider>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Condition",

  data: () => ({
    name: "",
    check: true,
    types1: ["Fire", "Water", "Grass", "Electric"],
    types2: ["Flying", "Fighting", "Psychic", "Bug"],
    types3: ["Ice", "Dragon", "Rock", "Ground"],
    types4: ["Normal", "Poison", "Ghost", "Dark"],
    types5: ["Steel", "Fairy"],
    hp: [1, 255],
    atk: [1, 255],
    def: [1, 255],
    spatk: [1, 255],
    spdef: [1, 255],
    spd: [1, 255]
  }),

  watch: {
    check: function(newVal) {
      if (newVal) {
        this.types1 = ["Fire", "Water", "Grass", "Electric"];
        this.types2 = ["Flying", "Fighting", "Psychic", "Bug"];
        this.types3 = ["Ice", "Dragon", "Rock", "Ground"];
        this.types4 = ["Normal", "Poison", "Ghost", "Dark"];
        this.types5 = ["Steel", "Fairy"];
      } else {
        this.types1 = [];
        this.types2 = [];
        this.types3 = [];
        this.types4 = [];
        this.types5 = [];
      }

      this.onChange();
    }
  },

  methods: {
    ...mapActions(["setConditions"]),
    onChange: function() {
      const conditions = {
        name: this.name,
        types: this.types1
          .concat(this.types2)
          .concat(this.types3)
          .concat(this.types4)
          .concat(this.types5),
        base: {
          hp: this.hp,
          atk: this.atk,
          def: this.def,
          spatk: this.spatk,
          spdef: this.spdef,
          spd: this.spd
        }
      };
      this.setConditions(conditions);
    },
    clear: function() {
      this.name = "";
      this.check = true;
      this.types1 = ["Fire", "Water", "Grass", "Electric"];
      this.types2 = ["Flying", "Fighting", "Psychic", "Bug"];
      this.types3 = ["Ice", "Dragon", "Rock", "Ground"];
      this.types4 = ["Normal", "Poison", "Ghost", "Dark"];
      this.types5 = ["Steel", "Fairy"];
      this.hp = [1, 255];
      this.atk = [1, 255];
      this.def = [1, 255];
      this.spatk = [1, 255];
      this.spdef = [1, 255];
      this.spd = [1, 255];

      this.setConditions(null);
    }
  }
};
</script>

<style>
.container {
  padding: 12px;
}
</style>
