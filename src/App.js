import ChangeWalletValues from "./components/ChangeWalletValues";
import Display from "./components/Display";
import ListPokemons from "./components/ListPokemons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <ChangeWalletValues />
        <ListPokemons />
      </header>
    </div>
  );
}

export default App;
