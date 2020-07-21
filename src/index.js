import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import { Header } from "./component/Header";
import { Artistas } from "./component/pages/artistas/artistas";
import Layout from "./component/Layout";
import { NotFound } from "./component/pages/notFound/notFound";
// ReactDOM.render(<App />, document.getElementById("App"));

const allContainer = document.getElementById("App");

render(
  <BrowserRouter>
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/artistas" component={Artistas} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </>
  </BrowserRouter>,
  allContainer
);
