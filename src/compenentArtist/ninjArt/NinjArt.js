import React from "react";
import "./ninjart.css";
import { ArtLogo } from "../../componentGlb/Artlogo/ArtLogo";
import artLogo from "../../component/images/artcademi-logo.svg";
import ninjito from "../../component/images/artcademi-ninjart.png";

export const NinjArt = () => {
  return (
    <>
      <div className="ninjart-container-logo">
        <ArtLogo Logo={artLogo} subtitle="Comunidad" />
      </div>
      <div className="ninjart-container-all">
        <div className="ninjart-container-title">
          <h1 className="main-title">
            <span className="text-1">Conviértete</span>
            <span className="text-2"> en un</span>
            <span className="text-3"> Ninja</span>
            <span className="text-4"> del Arte.</span>
          </h1>
          <p className="ninjart-subtitle">Así como Ninjito...</p>
        </div>
        <div className="ninjart-container-content">
          <p className="hero-text-artist-paragraph">
            Nuestra idea es servir de vitrina para nuevos Artistas en esta era
            digital, y demostrar que podemos vivir de lo que nos gusta hacer.
            Mira nuestro prototipo Artcademi dFhilo, es nuestra forma de
            transmitir lo que sentimos como posible, porque nosotros tenemos
            talento, tenemos ate, somo Artcademi la comunidad Latinoamericana en
            torno a la educación, ate, y emprendimiento en el mundo.
          </p>
          <div className="ninjart-container-img">
            <img
              className="ninjart-img"
              src={ninjito}
              alt="imagen de ninjart"
            />
          </div>
        </div>
      </div>
    </>
  );
};
