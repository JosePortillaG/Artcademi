import React from "react";
import icondiscord from "../images/icon-discord.png";
import iconfacebook from "../images/icon-facebook.png";
import iconinstagram from "../images/icon-instagram.png";
import iconpatreon from "../images/icon-patreon.png";
import iconpinterest from "../images/icon-pinterest.png";
import icontiktok from "../images/icon-tiktok.png";
import iconyoutube from "../images/icon-youtube.png";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container-links u-wrapper">
      <div className="footer-container-all">
        <div className="footer-container-text-links">
          <div className="footer-text-links">
            <p>Vinculos</p>
            <ul className="footer-links">
              <li>
                <a>Inicio</a>
              </li>
              <li>
                <a>Artistas</a>
              </li>
              <li>
                <a>Como ser un NinjArt</a>
              </li>
              <li>
                <a>dFhilo</a>
              </li>
              <li>
                <a>Diseño tu Marca</a>
              </li>
              <li>
                <a>Diseñemos tu Musica</a>
              </li>
              <li>
                <a>Diseñamos tu Web</a>
              </li>
              <li>
                <a>BlogArt</a>
              </li>
              <li>
                <a>Conocenos</a>
              </li>
            </ul>
          </div>
          <div className="footer-container-text">
            <p className="footer-post">Últimos Post</p>
            <p className="footer-jdilla">J Dilla: Manos doradas.</p>
          </div>
        </div>
        <div className="footer-nets-container-all">
          <p className="footer-nets">Nuestras Redes.</p>
          <div className="footer-container-nets">
            <div className="nets-1">
              <img
                className="icon-patreon"
                src={iconpatreon}
                alt="icon-patreon"
              />
              <img
                className="icon-discord-footer"
                src={icondiscord}
                alt="icon-discord"
              />
            </div>
            <div className="nets-2">
              <img
                className="icon-pinterest"
                src={iconpinterest}
                alt="icon-pinterest"
              />
              <img
                className="icon-youtube"
                src={iconyoutube}
                alt="icon-youtube"
              />
            </div>
            <div className="nets-3">
              <img
                className="icon-instagram"
                src={iconinstagram}
                alt="icon-instagram"
              />
              <img className="icon-tiktok" src={icontiktok} alt="icon-tiktok" />
            </div>
            <div className="nets-4">
              <img
                className="icon-faceboock"
                src={iconfacebook}
                alt="icon-faceboock"
              />
            </div>
          </div>
          <p className="footer-newsletters">Newsletters, Suscribite!</p>
          <form className="footer-container-input">
            <input
              className="footer-input"
              type="email"
              name="correo/email"
              placeholder="ingresa tu E-mail"
            />
          </form>
          <div className="footer-container-button">
            <button className="footer-button">
              <a className="footer-text-link">
                Envia tu E-mail y descarga un regalo
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
