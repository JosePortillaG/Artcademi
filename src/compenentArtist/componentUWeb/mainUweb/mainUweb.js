import React from "react";
import "./mainUweb.css";

export const MainUWeb = () => {
  return (
    <section className="container-main-uweb-all u-wrapper">
      <div className="container-main-uweb">
        <h2 className="main-uweb-profile">
          Tu perfil de Artista en este espacio?
        </h2>
        <div className="main-uweb-content">
          <p className="uweb-content-1">
            Modalidad de aprendizaje El taller inicia desde CERO por lo cual no
            es necesario conocimientos previos para poder realizarlo. La edad
            aconsejada para alumnos es tener al menos 13 años de edad..
          </p>
          <p className="uweb-content-4">
            El taller se puede realizar de forma presencial o desde tu hogar en
            nuestra modalidad ONLINE
          </p>
          <p className="uweb-content-3">
            DEBIDO A LA PANDEMIA MUNDIAL POR EL MOMENTO SOLO ESTÁ DISPONIBLE LA
            VERSIÓN ONLINE DEL TALLER.
          </p>
        </div>
      </div>
    </section>
  );
};
