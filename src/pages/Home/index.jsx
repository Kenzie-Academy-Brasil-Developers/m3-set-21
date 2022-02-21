import Button from "../../components/Button";
import Card from "../../components/Card";
import { product3 } from "../../styles/global";

const Home = () => {
  return (
    <div>
      Home
      <Button onClick={() => console.log("Teste")} backgroundColor={product3}>
        🥖 Panificadora
      </Button>
      <Card />
    </div>
  );
};

export default Home;
