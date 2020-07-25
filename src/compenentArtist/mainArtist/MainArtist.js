import React from "react";
import modelArtist from "../../component/images/artcademi-modeloArtistaApp.png";
import "./mainArtistas.css";

export const MainArtist = () => {
  return (
    <section className="main-artist-container">
      <div className="u-wrapper">
        <p className="main-text-want-have">
          <span className="main-text-want">¿Quieres </span>
          <span className="main-text-have">tener</span>
        </p>
        <p className="main-text-space">
          Tu perfil de Artista en este espacio
          <span>?</span>
        </p>
        <p className="main-text-artist-paragraph-1">
          Envía tu idea de grupo a dfhilo@artcademi.com con el asunto “Propuesta
          grupo”. Envía la propuesta con la disciplina que sientas que manejas
          adecuadamente y un propósito claro, ayudar y compartir sobre tu arte.
          Adjunta tu redes para conocer tu trabajo. Analizamos tu perfil y te
          respondemos en 2 día. Si apruebas “nuestro humilde método” abrimos tu
          grupo en la comunidad Artcademi de Discord.
        </p>
      </div>
      <img
        className="img-model-artist"
        src={modelArtist}
        alt="modelo tarjeta artista"
      />
      <div className="u-wrapper">
        <p className="main-text-artist-paragraph-2">
          En el grupo puedes compartir tus trabajos como “maestro” para mostrar
          lo que sabes, también puedes mostrar tus servicios en esa área. Junto
          a esto, moderaras ese grupo siguiendo el código del NinjArt compartir
          tu experiencia construirá un entorno educativo donde todos vamos a
          aportar y crecer juntos, a partir del arte. Cuando pases un periodo de
          3 meses siendo el lider de un grupo, te solicitaremos detalles para
          crear tu perfil de Artista NinjArt. Es la tarjeta de presentación de
          tus habilidades en nuestra comunidad.
        </p>
      </div>
    </section>
  );
};
