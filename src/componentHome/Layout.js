import React, { Fragment } from "react";
import { Header } from "./Header";
import { GlobalStyle } from "../styles/GloblaStyle";

function Layout(props) {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      {props.children}
    </Fragment>
  );
}
export default Layout;
