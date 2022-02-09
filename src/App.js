import "./App.css";


import { GlobalStyle } from "./styles/global";
import Button from "./components/Button";
import Card from "./components/Card";
import ButtonTwo from "./components/ButtonTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Button>Clica aqui</Button>
        <Button warning>Clica aqui não</Button>
        <ButtonTwo>Opa!</ButtonTwo>
        <Card></Card>
      </header>
    </div>
  );
}

export default App;
