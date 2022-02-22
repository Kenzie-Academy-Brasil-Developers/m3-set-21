import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--grey-3);
`;

export const Form = styled.form`
  background-color: var(--color-primary-50);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 38px 18px 24px 18px;
  box-shadow: var(--box-shadow);

  button {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  div + div {
    margin-top: 8px;
  }
`;

export const ContainerMessage = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;

  strong {
    font-weight: 500;
  }
`;
