import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`;

export const ProductsContainer = styled.section`
  display: flex;
  overflow-x: scroll;

  max-width: var(--container-size);
  padding: 0 40px;

  @media (min-width: 800px) {
    flex-wrap: wrap;
  }

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonContainer = styled.section`
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  padding: 0 60px;
  margin-top: 42px;
  margin-bottom: 42px;

  button {
    width: 150px;
    margin-right: 8px;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 25px;
  background-color: var(--grey-3);
  border: 2px solid #f5f5f5;
  flex-direction: column;
  height: 100%;
  min-width: 350px;
`;

export const CartHeader = styled.header`
  display: flex;
  background: var(--color-primary);

  padding: 20px 10px;
  align-items: center;
  width: 100%;
  border-radius: 14px 14px 0px 0px;

  color: #fff;

  span {
    padding: 0 12px;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const NoProductsMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--grey-1);
  text-align: center;

  gap: 16px;

  padding: 64px 0;

  svg {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-weight: 500;
  }

  h3 {
    font-weight: normal;
  }
`;
