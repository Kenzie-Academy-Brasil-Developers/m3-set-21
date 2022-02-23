import { Container, Image, CardFooter } from "./styles";
import IconButton from "../IconButton";
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ image, title, price, category, description }) => {
  return (
    <Container>
      <Image>
        <img alt="Panificadora" src={image} />
        <div>{category}</div>
      </Image>
      <section>
        <h1>{title}</h1>
        <span>{description}</span>
      </section>

      <CardFooter>
        <strong>{price}</strong>
        <IconButton primary={false} icon={FaShoppingCart} />
      </CardFooter>
    </Container>
  );
};

export default Card;
