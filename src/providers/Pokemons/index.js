import { createContext, useContext, useState } from "react";

const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(["pikachu", "pikachu2"]);

  const addPokemon = (newPokemon) => {
    setPokemons([...pokemons, newPokemon]);
  };

  return (
    <PokemonsContext.Provider value={{ pokemons, addPokemon }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => useContext(PokemonsContext);
