// Retorno implicito nao pode ter state
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
