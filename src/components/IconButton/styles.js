import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.primary ? "var(--color-primary-50)" : "var(--color-secondary-50)"};
  border: 0;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  transition: 0.5s;

  svg {
    transition: 0.5s;
    margin-top: 4px;
    color: ${(props) =>
      props.primary ? "var(--color-primary)" : "var(--color-secondary)"};
  }

  :hover {
    background-color: ${(props) =>
      props.primary ? "var(--color-primary)" : "var(--color-secondary)"};

    svg {
      color: ${(props) =>
        props.primary
          ? "var(--color-primary-50)"
          : "var(--color-secondary-50)"};
    }
  }
`;
