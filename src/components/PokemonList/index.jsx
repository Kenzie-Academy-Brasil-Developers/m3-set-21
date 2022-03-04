import { useSelector } from "react-redux";

const PokemonList = () => {
  const pokemons = useSelector((store) => store.pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div>
          <img src={pokemon.sprites.front_default} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
