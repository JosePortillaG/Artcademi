import React from "react";
import "./buttonFollow.css";
import Modal from "../Modal";
import { Link } from "react-router-dom";
export const ButtonFollow = () => {
  return (
    <div className="hero-container-button">
      <button className="hero-button">
        <Link to="/artistas">¡Recibe nuestro regalo de bienvenida!</Link>
        <Modal isOpen={false} />
      </button>
    </div>
  );
};
