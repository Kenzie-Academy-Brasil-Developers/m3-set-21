import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: white
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
