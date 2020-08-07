import React from "react";
import "./mainUmusic.css";

export const MainUMusic = () => {
  return (
    <section className="container-main-umusic-all u-wrapper">
      <div className="container-main-umusic">
        <h2 className="main-umusic-profile">
          Tu perfil de Artista en este espacio?
        </h2>
        <div className="main-umusic-content">
          <p className="umusic-content-1">
            Modalidad de aprendizaje El taller inicia desde CERO por lo cual no
            es necesario conocimientos previos para poder realizarlo. La edad
            aconsejada para alumnos es tener al menos 13 años de edad..
          </p>
          <p className="umusic-content-4">
            El taller se puede realizar de forma presencial o desde tu hogar en
            nuestra modalidad ONLINE
          </p>
          <p className="umusic-content-3">
            DEBIDO A LA PANDEMIA MUNDIAL POR EL MOMENTO SOLO ESTÁ DISPONIBLE LA
            VERSIÓN ONLINE DEL TALLER.
          </p>
        </div>
      </div>
    </section>
  );
};
