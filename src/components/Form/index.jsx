import { useState } from "react";

import Button from "../Button";

const Form = ({ handleCountries }) => {
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  const addCountry = (e) => {
    e.preventDefault();

    const newCountry = {
      country,
      population: Number(population),
    };

    handleCountries(newCountry);
  };

  return (
    <form onSubmit={addCountry}>
      <input
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Insirar o nome de um país"
      />
      <input
        onChange={(e) => setPopulation(e.target.value)}
        placeholder="Insira a população de um país (apenas números)"
      />

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default Form;
