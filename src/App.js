/** Importações css, bibliotecas, importações de dentro react, componentes */
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Gabriel" />
        <Card name="Amanda" />
        <Card name="Wesley" />
        <Card name="Ivan" />
      </header>
    </div>
  );
}

export default App;
