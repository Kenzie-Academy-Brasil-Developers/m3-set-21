import { ADD_POKEMON } from "./actionTypes";

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON,
  pokemon,
});
