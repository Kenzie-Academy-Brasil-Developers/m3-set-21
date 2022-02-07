/** Importações css, bibliotecas, importações de dentro react, componentes */
import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [rockets, setRockets] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchRockets() {
      const response = await fetch("https://api.spacexdata.com/v4/rockets");

      const newResponse = await response.json();

      const newRockets = newResponse.map((rocket) => ({
        ...rocket,
        novaChave: "1",
      }));

      setLoading(false);
      setRockets(newRockets);
    }

    fetchRockets();

    // fetch("https://api.spacexdata.com/v4/rockets")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     const newRockets = response.map((rocket) => ({
    //       ...rocket,
    //       novaChave: "1",
    //     }));

    //     setRockets(newRockets);
    //   });
  }, []);

  // array vazio montagem
  // array com alguma coisa, atualização

  useEffect(() => {
    if (count > 0) {
      console.log(count);
    }
  }, [count, rockets]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Foguetes</h1>
        <ul>
          {loading ? (
            <div> Carregando... </div>
          ) : (
            rockets.map((rocket) => (
              <Card
                key={rocket.id}
                company={rocket.company}
                name={rocket.name}
              />
            ))
          )}
        </ul>

        <button onClick={() => setLoading(true)}> Desaparecer card </button>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
      </header>
    </div>
  );
}

export default App;
