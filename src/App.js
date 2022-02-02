/** Importações css, bibliotecas, importações de dentro react, componentes */
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  // Two way data binding

  const sub = () => {
    setCount(count - 1);
  };

  const addName = (event) => {
    event.preventDefault();
    if (name) {
      setNameList([...nameList, { name }]);
    }
  };

  console.log(nameList);

  const logName = (name) => setNameList([...nameList, { name }]);

  return (
    <div className="App">
      <header className="App-header">
        {count}

        {/* Sempre que tiver parametro, colocar arrow antes */}
        <Button onClick={() => setCount(count + 1)}>Aumentar</Button>
        <Button onClick={sub}>Diminuir</Button>

        <form onSubmit={addName}>
          <Input
            placeholder="Digite um nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit">Adicionar na lista</Button>
        </form>

        <List list={nameList} logName={logName} />
      </header>
    </div>
  );
}

export default App;
