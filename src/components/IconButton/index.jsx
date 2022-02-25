import { Container } from "./styles";

const IconButton = ({ icon: Icon, primary = true, ...rest }) => {
  return (
    <Container {...rest} primary={primary}>
      <Icon />
    </Container>
  );
};

export default IconButton;
