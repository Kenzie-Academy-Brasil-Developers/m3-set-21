import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.backgroundColor};
  color: var(--grey-0);
  height: 40px;
  border-radius: 30px;
  border: 1.5px solid ${(props) => props.backgroundColor};
  transition: 0.5s;
  width: 100%;
  padding: 0 0.5rem;

  :hover {
    border: 1.5px solid var(--grey-0);
  }
`;
