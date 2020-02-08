import Vue from "vue";
import Vuex from "vuex";
import pokedex from "./pokedex.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: pokedex,
    id: 0
  },
  getters: {
    pokemons: state => state.pokemons,
    isOpen: state => !!state.id,
    pokemon: state => state.pokemons.filter(p => p.id === state.id)[0],
    isFirst: state => state.id === 1,
    isLast: state => state.id === state.pokemons.length
  },
  mutations: {
    openDialog: (state, id) => {
      state.id = id;
    },
    closeDialog: state => {
      state.id = 0;
    }
  },
  actions: {
    openDialog: ({ commit }, id) => {
      commit("openDialog", id);
    },
    closeDialog: ({ commit }) => {
      commit("closeDialog");
    }
  },
  modules: {}
});
