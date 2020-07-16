import React, { Fragment } from "react";
import "./styles/App/app.css";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import { Main } from "./component/Main";
import { Comunidad } from "./component/Comunidad";
import { Ninjart } from "./component/Ninjart";
import { Members } from "./component/Members";
import { Footer } from "./component/Footer";
import { GlobalStyle } from "./GloblaStyle";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main />
      <Comunidad />
      <Ninjart />
      <Members />
      <Footer />
    </Fragment>
  );
}

export default App;
