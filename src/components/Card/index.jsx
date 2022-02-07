/**Importação, componentes, libs, etc */

import { useEffect } from "react";

// Chamada da função com as props no parametro se existirem
const Card = ({ name, company }) => {
  // Logíca acima do return

  // desmontagem
  useEffect(
    () => () => {
      console.log(name);
    },
    []
  );

  return (
    <li>
      Nome do foguete: {name} - Empresa: {company}
    </li>
  );
};

// exportação para utilizar em outros lugares
export default Card;
