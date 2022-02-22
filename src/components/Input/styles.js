import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  label {
    margin-left: 6px;
  }
`;

export const InputContainer = styled.div`
  background: var(--grey-3);
  border-radius: 30px;
  padding: 0.8rem;
  width: 100%;
  transition: 0.5s;
  border: 1.5px solid var(--grey-3);

  :focus-within {
    border: 1.5px solid var(--grey-0);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-primary);
    `}

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
