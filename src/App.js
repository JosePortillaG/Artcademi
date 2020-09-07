import React, { Fragment } from "react";
// import "./styles/App/app.css";
import { Hero } from "./component/Hero";
import { Start } from "./component/Start";
import { Comunidad } from "./component/Comunidad";
import { MainText } from "./component/maintext";
import { Members } from "./component/Members";
import { Footer } from "./component/Footer";
import { GlobalStyle } from "./styles/GloblaStyle";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Hero />
      <MainText />
      <Start />
      <Comunidad />
      <Members />
      <Footer />
    </Fragment>
  );
}

export default App;
