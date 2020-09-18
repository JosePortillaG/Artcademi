import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import { Artistas } from "./compenentArtist/artistas";
import Layout from "./component/Layout";
import { NotFound } from "./component/pages/notFound/notFound";
import { UBrand } from "./compenentArtist/componentUBrand/Ubrand";
import { UMusic } from "./compenentArtist/componentUMusic/UMusic";
import { UWeb } from "./compenentArtist/componentUWeb/UWeb";
import { BlogArt } from "./componentBlogArt/blogArt";
import { KnowUs } from "./componentKnowUs/knowUs";
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
          <Route exact path="/blogArt" component={BlogArt} />
          <Route exact path="/equipo" component={KnowUs} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </>
  </BrowserRouter>,
  allContainer
);
