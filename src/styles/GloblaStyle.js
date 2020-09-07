import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
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
  --background: #f9dcac;
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
.main-title {
  font-family: "paytone1";
  font-size: 35px;
  line-height: 1em;
  text-align: center;
}
.text-1 {
  color: var(--color-1);
}
.text-2 {
  color: var(--color-4);
}
.text-3 {
  color: var(--color-2);
}
.text-4 {
  color: var(--color-3);
}
@media screen and (min-width: 768px) {
  .main-title {
    font-size: 50px;
    padding: 0 22px;
    letter-spacing: 1px;
  }
}
@media screen and (min-width: 1024px) {
  .u-wrapper {
    padding: 0 88px
  }
  .main-title {
    text-align: initial;
    padding: initial;
  }
}
`;
