import Button from "../../components/Button";
import Card from "../../components/Card";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  primary,
  primary50,
  product2,
  product3,
  product4,
  secondary,
} from "../../styles/global";
import {
  ButtonContainer,
  Cart,
  CartHeader,
  Container,
  NoProductsMessage,
  ProductsContainer,
  TextInfo,
} from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import ListCard from "../../components/ListCard";

const Dashboard = ({ auth }) => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [token] = useState(localStorage.getItem("@KenzieFood:token"));

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

  const filterByCategory = (category) => {
    setFilteredFoods(foods.filter((food) => food.categoria === category));
  };

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const total = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cart.reduce((acc, product) => acc + product.preco, 0));

  const finishOrder = async () => {
    const response = await api.post("/cart", {
      headers: {
        Authorzation: `Bearer ${token}`,
      },
    });
  };

  return (
    <>
      <Header foods={foods} setFilteredFoods={setFilteredFoods} />
      <ButtonContainer>
        <Button onClick={() => filterByCategory("")}>Todos</Button>
        <Button
          onClick={() => filterByCategory("Panificadora")}
          backgroundColor={product2}
        >
          Panificadora
        </Button>
        <Button
          onClick={() => filterByCategory("Frutas")}
          backgroundColor={product3}
        >
          Frutas
        </Button>

        <Button
          onClick={() => filterByCategory("Bebidas")}
          backgroundColor={product4}
        >
          Bebidas
        </Button>
      </ButtonContainer>
      <Container>
        <ProductsContainer>
          {filteredFoods.length
            ? filteredFoods.map((food) => (
                <Card key={food.id} food={food} addToCart={addToCart} />
              ))
            : foods.map((food) => (
                <Card key={food.id} food={food} addToCart={addToCart} />
              ))}
        </ProductsContainer>

        <Cart>
          <CartHeader>
            <span>
              <FaShoppingCart /> <h3>Carrinho</h3>
            </span>
          </CartHeader>
          {cart.length ? (
            <div>
              {cart.map((food) => (
                <ListCard food={food} deleteFromCart={deleteFromCart} />
              ))}
              <TextInfo>
                <h3>Quantidade</h3>
                <h3>{cart.length}</h3>
              </TextInfo>
              <TextInfo>
                <h3>Total</h3>
                <h3>{total}</h3>
              </TextInfo>
              <Button backgroundColor={secondary}>Finalizar pedido</Button>
            </div>
          ) : (
            <NoProductsMessage>
              <FiShoppingBag />
              <h1>Ops!</h1>
              <h3>
                Por enquanto não temos <br /> produtos no carrinho
              </h3>
            </NoProductsMessage>
          )}
        </Cart>
      </Container>
    </>
  );
};

export default Dashboard;
