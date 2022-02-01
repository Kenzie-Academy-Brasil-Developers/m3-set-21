/**Importação, componentes, libs, etc */

import Button from "../Button";
// Chamada da função com as props no parametro se existirem
export const Card = ({ country }) => {
  // Logíca acima do return

  return (
    /* Fragment */
    <>
      <h1>{country.name}</h1>
      <span>{country.population}</span>
    </>
  );
};

// exportação para utilizar em outros lugares
