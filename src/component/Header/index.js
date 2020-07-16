import React from "react";
import logo from "../images/logo-arcademi.svg";
import discord from "../images/icon-discord.png";
import patreon from "../images/logo-patreon.svg";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-menu">
      <header className="header-container-menu">
        <a href="#">
          <img className="logo-artcademi" src={logo} alt={logo} />
        </a>
        <input type="checkbox" id="open" className="menu-checkbox" />
        <label for="open" className="menu-open" />
        <nav className="menu">
          <ul>
            <li>
              <a className="text-menu-incio" href="#">
                Inicio
              </a>
            </li>
            {/* </li>
            <ul>
              <li>Como comenzar?</li>
              <li>Comunidad Discord</li>
            </ul>
            <li> */}
            <li>
              <a className="text-menu-artistas" href="#">
                Artistas
              </a>
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
              <a className="text-menu-blogart" href="#">
                BlogArt
              </a>
            </li>
            {/* <ul>
                <li>J Dilla</li>
              </ul> */}

            <li>
              <a className="text-menu-conocenos" href="#">
                Conocenos
              </a>
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
            <a href="#">
              <img className="icon-discord" src={discord} alt={discord} />
            </a>
          </span>
          <span className="container-button-menu">
            <button className="button-patreon-header">
              <a href="#">
                <img className="logo-patreon" src={patreon} alt={patreon} />
              </a>
            </button>
          </span>
        </div>
      </header>
    </div>
  );
};
//el id del input tiene que ser igual al for de label para que se conecten
