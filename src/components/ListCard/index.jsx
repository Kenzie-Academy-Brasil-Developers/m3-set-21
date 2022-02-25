import { FaTrash } from "react-icons/fa";
import { CardInfo, Container } from "./styles";

const ListCard = ({ food, deleteFromCart }) => {
  return (
    <Container>
      <img src={food.imagem} alt={food.nome} />

      <section>
        <CardInfo>
          <h3>{food.nome}</h3>
          <h4>{food.categoria}</h4>
          <span>{food.formattedPrice}</span>
        </CardInfo>
      </section>
      <button onClick={() => deleteFromCart(food.id)}>
        <FaTrash />
      </button>
    </Container>
  );
};

export default ListCard;
