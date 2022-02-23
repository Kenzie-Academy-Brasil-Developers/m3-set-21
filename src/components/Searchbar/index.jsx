import IconButton from "../IconButton";
import { Container, InputContainer } from "./styles";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ error, ...rest }) => {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <input {...rest} />
        <IconButton icon={FaSearch} />
      </InputContainer>
    </Container>
  );
};

export default Searchbar;
