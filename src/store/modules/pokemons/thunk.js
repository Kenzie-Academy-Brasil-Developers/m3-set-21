import { addPokemon } from "./actions";
import axios from "axios";

export const addPokemonThunk = (pokemon) => {
  return (dispatch, getState) => {
    const { pokemons } = getState();

    console.log(pokemons, "getState");

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => dispatch(addPokemon(response.data)));
  };
};
