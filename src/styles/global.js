import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body, input, button {
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

:root {
  --color-primary: #ff2253;
  --color-primary-50: #ffe9ee;
  --color-secondary: #4aca94;
  --color-secondary-50: #e4f7ef;
  --product-1: #eef6ff;
  --product-2: #fff7f4;
  --product-3: #ffe4ea;
  --product-4: #f3eef5;
  --grey-0: #212529;
  --grey-1: #868e96;
  --grey-2: #e9ecef;
  --grey-3: #f8f9fa;
  --white-1: #fff;
  --caption-color: rgba(0, 0, 0, 0.5);

  --title-1: 1rem;
  --title-2: calc(var(--title-1) - 0.25);
  --title-3: calc(var(--title-2) - 0.25);

  --radius-inputs-buttons: 2rem;
  --border-cards: 0.875rem;
  --box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);

  --container-size: 1200px;
  --aside-size: 300px;
  
}
 
`;

export const product1 = "#eef6ff";
export const product2 = "#fff7f4";
export const product3 = "#ffe4ea";
export const product4 = "#f3eef5";

export const primary = "#ff2253";
export const primary50 = "#ffe9ee";
export const secondary = "#4aca94";
export const secondary50 = "#e4f7ef";
