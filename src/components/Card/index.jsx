import { Container, Image, CardFooter } from "./styles";
import IconButton from "../IconButton";
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ food, addToCart }) => {
  return (
    <Container>
      <Image>
        <img alt="Panificadora" src={food.imagem} />
        <div>{food.categoria}</div>
      </Image>
      <section>
        <h1>{food.nome}</h1>
        <span>{food.descricao}</span>
      </section>

      <CardFooter>
        <strong>{food.formattedPrice}</strong>
        <IconButton
          onClick={() => addToCart(food)}
          primary={false}
          icon={FaShoppingCart}
        />
      </CardFooter>
    </Container>
  );
};

export default Card;
