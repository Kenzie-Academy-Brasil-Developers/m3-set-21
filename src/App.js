/** Importações css, bibliotecas, importações de dentro react, componentes */
import "./App.css";
import { useState } from "react";
import { AiTwotoneBulb, AiOutlineBulb } from "react-icons/ai";
import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [isOn, setIsOn] = useState(true);
  const [countryList, setCountryList] = useState([]);

  const handleLight = () => {
    setIsOn(!isOn);
  };

  const handleCountries = (country) => {
    setCountryList([...countryList, country]);
  };

  console.log(countryList);

  return (
    <div className="App">
      <header className="App-header">
        {/* Ternario que retorna um componente inteiro 

        {isOn ? <AiTwotoneBulb /> : <AiOutlineBulb />}

      */}

        {/** Ternario com props  */}
        <AiTwotoneBulb color={isOn && "yellow"} />
        {/* <AiTwotoneBulb color={isOn ? "yellow" : null} /> */}

        <Button onClick={handleLight}>
          {isOn ? "Apagar a lâmpada" : "Acender a lâmpada"}
        </Button>

        <Button secondaryColor={true} onClick={handleLight}>
          {isOn ? "Apagar a lâmpada" : "Acender a lâmpada"}
        </Button>

        <Form handleCountries={handleCountries} />
        <List countryList={countryList} />
      </header>
    </div>
  );
}

export default App;
