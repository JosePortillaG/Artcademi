import React from "react";
import ImgPulgar from "../images/pulgar-arriba.png";
import imgMiniSearch from "../images/artcademi-minicom.png";
import imgCode from "../images/artcademi-iniciotip.png";
// import imgSearch from "../images/artcademi-iniciobuscar.png";
import imgBarter from "../images/artcademi-iniciocomunica.png";

import "./mainStyle.css";

export const Main = () => {
  return (
    <section className="main-container u-wrapper">
      <div className="main-container-768">
        <div className="main-container-thumb">
          <img className="thumb-up" src={ImgPulgar} alt="pulgar arriba" />
        </div>
        <div className="main-tex-container">
          <p className="main-text-connect">Conecta los puntos</p>
          <p className="main-text-follow">
            y sigue tu corazón asi <br />
            como el beatmaker
          </p>
          <div className="main-container-button">
            <button className="main-button">
              <a href="#">J Dilla</a>
            </button>
          </div>
        </div>
      </div>
      <p className="main-container-how">
        <span className="main-how">¿Como</span>
        <br />
        <span className="main-start">comenzar?</span>
      </p>
      <div className="main-container-all">
        <div className="main-container-code">
          <p className="main-text-code">
            Lee el codigo del Ninja en
            <br />
            nuestro espacio de Discord.
          </p>
          <div className="main-content-img-code">
            <img className="img-code" src={imgCode} alt="img-code" />
          </div>
        </div>
        <div className="main-container-joinUp">
          <p className="main-text-joinUp">
            Unete a la comunidad <br />
            de arte que mas te guste.
          </p>
          <div className="main-content-img-scearch">
            <img className="img-scearch" src={imgMiniSearch} alt="img-search" />
          </div>
        </div>
        <div className="main-container-barter">
          <p className="main-text-barter">
            Aprende y enseña
            <br />
            eso que tanto te gusta.
            <br />
            Intercambia tus conocimientos.
          </p>
          <div className="main-content-img-barter">
            <img className="img-barter" src={imgBarter} alt="img-barter" />
          </div>
        </div>
      </div>
    </section>
  );
};
