import { Container } from "./styles";

const Button = ({ children, backgroundColor = "#f8f9fa", ...rest }) => {
  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Button;
