import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 16px;
  img {
    border-radius: 8px;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  button {
    display: flex;
    width: 30px;
    height: 30px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    transition: 0.5s;
    padding: 8px;

    border-radius: 4px;

    svg {
      font-size: 20px;
      align-self: center;
      color: var(--grey-1);
    }

    :hover {
      border: 1px solid var(--grey-1);
    }
  }
`;

export const CardInfo = styled.div`
  padding: 8px;
  min-width: 250px;

  h3 {
    max-width: 90%;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    color: var(--grey-1);
    font-weight: normal;
  }

  span {
    color: var(--grey-0);
  }
`;
