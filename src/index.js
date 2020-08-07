import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import { Header } from "./component/Header";
import { Artistas } from "./compenentArtist/artistas";
import Layout from "./component/Layout";
import { NotFound } from "./component/pages/notFound/notFound";
import { UBrand } from "./compenentArtist/componentUBrand/Ubrand";
import { UMusic } from "./compenentArtist/componentUMusic/UMusic";
import { UWeb } from "./compenentArtist/componentUWeb/UWeb";
// ReactDOM.render(<App />, document.getElementById("App"));

const allContainer = document.getElementById("App");
render(
  <BrowserRouter>
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/artistas" component={Artistas} />
          <Route exact path="/artistas/tuMarca" component={UBrand} />
          <Route exact path="/artistas/tuMusica" component={UMusic} />
          <Route exact path="/artistas/tuWeb" component={UWeb} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </>
  </BrowserRouter>,
  allContainer
);
