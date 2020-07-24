import React from "react";

export const ButtonFollow = () => {
  return (
    <>
      <p className="hero-text-seguir">
        Seguir nuestro
        <br />
        camino es un
        <span className="arte-1"> a</span>
        <span className="arte-2">r</span>
        <span className="arte-3">t</span>
        <span className="arte-4">e.</span>
      </p>
      <div className="hero-container-button">
        <button className="hero-button">
          <a href="#">¡Recibe nuestro regalo de bienvenida!</a>
        </button>
      </div>
    </>
  );
};
