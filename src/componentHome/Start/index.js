import React from "react";
import imgMiniSearch from "../images/artcademi-minicom.png";
import imgCode from "../images/artcademi-iniciotip.png";
// import imgSearch from "../images/artcademi-iniciobuscar.png";
import imgBarter from "../images/artcademi-iniciocomunica.png";
import "./start.css";

export const Start = () => {
  return (
    <section className="start-container">
      <p className="start-container-how">
        <span className="start-how">¿Como</span>
        <span className="start-start"> empiezo?</span>
      </p>
      <div className="start-container-all">
        <div className="start-container-code">
          <p className="start-text-code">
            Lee el codigo del Ninja en
            <br />
            nuestro espacio de Discord.
          </p>
          <div className="start-content-img-code">
            <img className="img-code" src={imgCode} alt="img-code" />
          </div>
        </div>
        <div className="start-container-joinUp">
          <p className="start-text-joinUp">
            Unete a la comunidad <br />
            de arte que mas te guste.
          </p>
          <div className="start-content-img-scearch">
            <img className="img-scearch" src={imgMiniSearch} alt="img-search" />
          </div>
        </div>
        <div className="start-container-barter">
          <p className="start-text-barter">
            Aprende y enseña
            <br />
            eso que tanto te gusta.
            <br />
            Intercambia tus conocimientos.
          </p>
          <div className="start-content-img-barter">
            <img className="img-barter" src={imgBarter} alt="img-barter" />
          </div>
        </div>
      </div>
    </section>
  );
};
