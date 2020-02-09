import Vue from "vue";
import Vuex from "vuex";
import pokedex from "./pokedex.js";

Vue.use(Vuex);

function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

export default new Vuex.Store({
  state: {
    pokemons: pokedex,
    id: 0,
    conditions: null
  },
  getters: {
    pokemons: state => {
      if (!state.conditions) {
        return state.pokemons;
      }

      return state.pokemons
        .filter(p => p.name.startsWith(hiraToKana(state.conditions.name)))
        .filter(p => p.type.some(t => state.conditions.types.includes(t)))
        .filter(
          p =>
            state.conditions.base.hp[0] <= p.base.HP &&
            p.base.HP <= state.conditions.base.hp[1]
        )
        .filter(
          p =>
            state.conditions.base.atk[0] <= p.base.Attack &&
            p.base.Attack <= state.conditions.base.atk[1]
        )
        .filter(
          p =>
            state.conditions.base.def[0] <= p.base.Defense &&
            p.base.Defense <= state.conditions.base.def[1]
        )
        .filter(
          p =>
            state.conditions.base.spatk[0] <= p.base.SPAttack &&
            p.base.SPAttack <= state.conditions.base.spatk[1]
        )
        .filter(
          p =>
            state.conditions.base.spdef[0] <= p.base.SPDefense &&
            p.base.SPDefense <= state.conditions.base.spdef[1]
        )
        .filter(
          p =>
            state.conditions.base.spd[0] <= p.base.Speed &&
            p.base.Speed <= state.conditions.base.spd[1]
        );
    },
    isOpen: state => !!state.id,
    pokemon: state => state.pokemons.filter(p => p.id === state.id)[0]
  },
  mutations: {
    openDialog: (state, id) => {
      state.id = id;
    },
    closeDialog: state => {
      state.id = 0;
    },
    setConditions: (state, conditions) => {
      state.conditions = conditions;
    }
  },
  actions: {
    openDialog: ({ commit }, id) => {
      commit("openDialog", id);
    },
    closeDialog: ({ commit }) => {
      commit("closeDialog");
    },
    setConditions: ({ commit }, conditions) => {
      commit("setConditions", conditions);
    }
  },
  modules: {}
});
