import React from "react";
import logo from "../images/logo-arcademi.svg";
import discord from "../images/icon-discord.png";
import patreon from "../images/logo-patreon.svg";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-menu">
      <header className="header-container-menu">
        <NavLink to="/">
          <img className="logo-artcademi" src={logo} alt={logo} />
        </NavLink>
        <input type="checkbox" id="open" className="menu-checkbox" />
        <label for="open" className="menu-open" />
        <nav className="menu">
          <ul>
            <li>
              <NavLink exact to="/" className="text-menu-incio">
                Inicio
              </NavLink>
            </li>
            {/* </li>
            <ul>
              <li>Como comenzar?</li>
              <li>Comunidad Discord</li>
            </ul>
            <li> */}
            <li>
              <NavLink to="/artistas" className="text-menu-artistas">
                Artistas
              </NavLink>
            </li>
            {/* <ul>
                <li>dFhilo</li>
                <li>Tu Marca</li>
                <li>Tu Musica</li>
                <li>Descargas</li>
                <li>Tu Web</li>
                <li>Contacta dFhilo</li>
              </ul> */}
            <li>
              <NavLink to="/blogart" className="text-menu-blogart">
                BlogArt
              </NavLink>
            </li>
            {/* <ul>
                <li>J Dilla</li>
              </ul> */}

            <li>
              <NavLink to="/conocenos" className="text-menu-conocenos">
                Conocenos
              </NavLink>
            </li>
            {/* <ul>
                <li>Artcademi</li>
                <li>dFhilo</li>
                <li>Agnes.X</li>
                <li>Josee</li>
                <li>Ninjito</li>
              </ul> */}
          </ul>
        </nav>
        <div className="contenedor-unete-menu">
          <p className="header-unete-text">Unete a nuestra comunidad</p>
          <span>
            <NavLink to="/">
              <img className="icon-discord" src={discord} alt={discord} />
            </NavLink>
          </span>
          <span className="container-button-menu">
            <button className="button-patreon-header">
              <NavLink to="/">
                <img className="logo-patreon" src={patreon} alt={patreon} />
              </NavLink>
            </button>
          </span>
        </div>
      </header>
    </div>
  );
};
//el id del input tiene que ser igual al for de label para que se conecten
