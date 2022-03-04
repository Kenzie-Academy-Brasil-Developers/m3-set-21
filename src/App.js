import "./App.css";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
