import Vue from "vue";
import Vuex from "vuex";
import pokedex from "./pokedex.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: pokedex
  },
  mutations: {},
  actions: {},
  modules: {}
});
