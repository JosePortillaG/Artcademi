import React from "react";
import "./buttonFollow.css";
import Modal from "../Modal";
export const ButtonFollow = () => {
  return (
    <div className="hero-container-button">
      <button className="hero-button">
        <a href="#">¡Recibe nuestro regalo de bienvenida!</a>
        <Modal isOpen={true} />
      </button>
    </div>
  );
};
