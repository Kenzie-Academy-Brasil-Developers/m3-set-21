import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--grey-3);
  border-radius: 30px;
  padding: 0.5rem;
  width: 100%;
  transition: 0.5s;
  border: 1.5px solid var(--grey-3);
  display: flex;

  :focus-within {
    border: 1.5px solid var(--grey-0);
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);

    &::placeholder {
      color: var(--grey-1);
    }
  }
`;
