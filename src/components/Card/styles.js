import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    width: var(--aside-size);
  }

  min-width: var(--aside-size);
  height: max-content;
  border-radius: var(--border-cards);
  position: sticky;
  padding: 16px;

  > section {
    padding: 6px;
  }

  h1 {
    margin-bottom: 16px;
    font-size: var(--title-1);
  }

  span {
    color: var(--caption-color);
  }

  /* :hover {
    cursor: pointer;
    img {
      border: 3px solid var(--color-primary);
    }
  } */
`;

export const Image = styled.figure`
  img {
    transition: 0.5s;

    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-cards);
    border: 3px solid var(--color-primary-50);
  }

  > div {
    background-color: var(--color-primary-50);
    border-radius: var(--radius-inputs-buttons);
    padding: 6px 18px;
    position: absolute;
    top: 41%;
    left: 10%;
    font-weight: 500;
    color: var(--grey-0);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  align-items: center;
`;
