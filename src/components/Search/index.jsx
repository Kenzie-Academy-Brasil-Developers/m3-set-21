import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemonThunk } from "../../store/modules/pokemons/thunk";


const Search = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <div>
      <input
        placeholder="Digite o nome de um pokémon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(addPokemonThunk(input))}>Procurar</button>
    </div>
  );
};

export default Search;
