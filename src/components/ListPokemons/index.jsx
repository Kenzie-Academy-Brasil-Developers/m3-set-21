import { useState } from "react";
import { usePokemons } from "../../providers/Pokemons";

const ListPokemons = () => {
  const [input, setInput] = useState("");

  const { pokemons, addPokemon } = usePokemons();

  const handleAddPokemon = () => {
    addPokemon(input);
    setInput("");
  };

  return (
    <div>
      <input
        placeholder="Digite um pokemon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddPokemon}>Adicionar pokémon</button>

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPokemons;
