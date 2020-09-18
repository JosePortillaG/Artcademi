import React from "react";
import imgNotFound from "../../images/img-error-404.png";
import "./notFound.css";
export const NotFound = () => {
  return (
    <div className="container-notFound">
      <h2>
        Nuestra imaginacion vuela y las paginas a veces también. Lo que estas
        buscando no se encuentra en esta pagina. Vuela directo a lo que buscas.
      </h2>
      <img src={imgNotFound} alt="ilustracion para error 404" />
    </div>
  );
};
