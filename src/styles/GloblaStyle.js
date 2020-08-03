import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: #ffecc9;
}
.App {
  max-width: 100%;
}
.u-wrapper {
  /* margin: 0 auto;
  width: 90%; */
  padding: 0 30px
}
:root {
  --color-1: #d47e00;
  --color-2: #006eae;
  --color-3: #542f70;
  --color-4: #2e1a46;
  --parrafo: #17100d;
}
ul, li, h1, h2, h3, p, button {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
}
`;
