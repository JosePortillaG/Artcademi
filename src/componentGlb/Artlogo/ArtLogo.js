import React from "react";
import "./artlogo.css";
import { Link } from "react-router-dom";

export const ArtLogo = ({ subtitle, Logo, rute }) => {
  return (
    <div className="container-art">
      <Link to={rute}>
        <img className="logo-art" src={Logo} alt="logo-artcademi" />
      </Link>
      <p className="text">{subtitle}</p>
    </div>
  );
};
