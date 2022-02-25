import logo from "../../assets/logo.svg";
import Searchbar from "../Searchbar";
import { Container } from "./styles";

const Header = ({ foods, setFilteredFoods }) => {
  const handleSearch = (e) => {
    setFilteredFoods(
      foods.filter((actual) =>
        actual.nome.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <img src={logo} alt="KenzieFood" />
      <Searchbar onChange={handleSearch} placeholder="Pesquisar por produto" />
    </Container>
  );
};

export default Header;
