import Button from "../../components/Button";
import Card from "../../components/Card";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { product2, product3, product4 } from "../../styles/global";
import {
  ButtonContainer,
  Cart,
  CartHeader,
  Container,
  NoProductsMessage,
  ProductsContainer,
} from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Dashboard = ({ auth }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      const response = await api.get("/products");

      const formattedResponse = response.data.map((food) => ({
        ...food,
        formattedPrice: Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(food.preco),
      }));

      setFoods(formattedResponse);
    }

    getFoods();
  }, []);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <ButtonContainer>
        <Button>Todos</Button>
        <Button backgroundColor={product2}>Panificadora</Button>
        <Button backgroundColor={product3}>Frutas</Button>
        <Button backgroundColor={product4}>Bebidas</Button>
      </ButtonContainer>
      <Container>
        <ProductsContainer>
          {foods.map((food) => (
            <Card
              key={food.id}
              image={food.imagem}
              category={food.categoria}
              description={food.descricao}
              title={food.nome}
              price={food.formattedPrice}
            />
          ))}
        </ProductsContainer>

        <Cart>
          <CartHeader>
            <span>
              <FaShoppingCart /> <h3>Carrinho</h3>
            </span>
          </CartHeader>
          <NoProductsMessage>
            <FiShoppingBag />
            <h1>Ops!</h1>
            <h3>
              Por enquanto não temos <br /> produtos no carrinho
            </h3>
          </NoProductsMessage>
        </Cart>
      </Container>
    </>
  );
};

export default Dashboard;
