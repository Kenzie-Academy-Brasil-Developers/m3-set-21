/**Importação, componentes, libs, etc */

// Chamada da função com as props no parametro se existirem
const Card = ({ name }) => {
  // Logíca acima do return

  return (
    <h1>
      {/* Renderização do jsx e variáveis  */}
      Olá Mundo! {name}
    </h1>
  );
};

// exportação para utilizar em outros lugares
export default Card;
