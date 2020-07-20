import React from "react";
import "./ninjart.css";
import Ninjito from "../images/ninjito.png";

export const Ninjart = () => {
  return (
    <section className="ninjart u-wrapper">
      <div className="ninjart-container-all">
        <div className="ninjart-container-img">
          <img src={Ninjito} alt="imagen de ninjito el gato ninja" />
        </div>
        <div className="ninjart-container-text">
          <p className="ninjart-text-transform">
            Conviértete
            <br />
            <span className="ninjart-text-1">en un Ninj</span>
            <span className="ninjart-text-2">A</span>
            <span className="ninjart-text-3">r</span>
            <span className="ninjart-text-4">t</span>
          </p>
          <p className="ninjart-text-how">Asi como Ninjito...</p>
          <p className="ninjart-text-content">
            Nuestra idea es servir de vitrina para nuevos Artistas en esta era
            digital, y demostrar que podemos vivir de lo que nos gusta hacer.
            <br />
            Mira nuestro prototipo Artcademi dFhilo, es nuestra forma de
            transmitir lo que sentimos como posible, porque nosotros tenemos
            talento, tenemos arte, somos Artcademi la comunidad Latinoamericana
            en torno a la educación, arte, y emprendimiento en el mundo.
          </p>
        </div>
      </div>
    </section>
  );
};
