import { Container, Gandalf } from "./styles";

const Card = () => {
  return (
    <Container>
      <h1>Personagens</h1>
      <div>
        <p>Frodo</p>
        <Gandalf>Gandalf</Gandalf>
        <p>Sam</p>
      </div>
    </Container>
  );
};

export default Card;
