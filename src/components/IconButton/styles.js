import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--color-secondary-50);
  border: 0;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  transition: 0.5s;

  svg {
    transition: 0.5s;
    margin-top: 4px;
    color: var(--color-secondary);
  }

  :hover {
    background-color: var(--color-secondary);
    svg {
      color: var(--color-secondary-50);
    }
  }
`;
