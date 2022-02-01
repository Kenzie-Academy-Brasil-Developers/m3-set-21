/** Importações css, bibliotecas, importações de dentro react, componentes */
import "./App.css";
import { Card } from "./components/Card";
import ButtonOla from "./components/Button";

function App() {
  const brazil = {
    name: "Brasil",
    population: "250 milhões",
  };

  const argentina = {
    name: "Argentina",
    population: "50 milhões",
  };

  const objectCountryList = [brazil, argentina];

  const countryListNames = ["Brasil", "Argentina"];

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {objectCountryList.map((country) => (
            <Card key={country.name} country={country} />
          ))}
        </ul>

        <ButtonOla className="container-1">Enviar</ButtonOla>
        <ButtonOla className="container-2">Enviar</ButtonOla>
        <ul>
          {countryListNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
