import React from "react";
import "./photocard.css";
export const PhotoCard = ({ photo, name, position }) => {
  return (
    <div className="container-photo-card">
      <div className="container-photo">
        <img src={photo} />
      </div>
      <div className="container-perfil">
        <p className="card-name">{name}</p>
        <p className="card-position">{position}</p>
        <div className="card-icon">
          <button>+</button>
        </div>
      </div>
    </div>
  );
};
