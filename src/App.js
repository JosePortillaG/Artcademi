import React, { Fragment } from "react";
// import "./styles/App/app.css";
import { Hero } from "./componentHome/Hero";
import { Start } from "./componentHome/Start";
import { Comunidad } from "./componentHome/Comunidad";
import { MainText } from "./componentHome/maintext";
import { Members } from "./componentHome/Members";
import { Footer } from "./componentHome/Footer";
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
