import { Container } from "./styles";

const IconButton = ({ icon: Icon, primary = true }) => {
  return (
    <Container primary={primary}>
      <Icon />
    </Container>
  );
};

export default IconButton;
