import logo from "../../assets/logo.svg";
import Searchbar from "../Searchbar";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="KenzieFood" />
      <Searchbar placeholder="Pesquisar por produto" />
    </Container>
  );
};

export default Header;
