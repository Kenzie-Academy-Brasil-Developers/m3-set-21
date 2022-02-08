/**Importação, componentes, libs, etc */

import { useEffect } from "react";

// Chamada da função com as props no parametro se existirem
const Counter = ({ count }) => {
  // Logíca acima do return

  useEffect(() => {
    return () => {
      console.log("O Counter saiu de tela");
    };
  }, []);

  return (
    <h1>
      {/* Renderização do jsx e variáveis  */}
      {count}
    </h1>
  );
};

// exportação para utilizar em outros lugares
export default Counter;
