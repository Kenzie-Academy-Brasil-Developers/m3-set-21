// import "./styles.css";

import { ButtonStyled } from "./styles";

const Button = ({ warning, children }) => {
  return <ButtonStyled warning={warning}>{children}</ButtonStyled>;
};

export default Button;
