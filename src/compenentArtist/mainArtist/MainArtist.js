import React from "react";
import modelArtist from "../../componentHome/images/artcademi-modeloArtistaApp.png";
import "./mainArtistas.css";
import { ButtonClick } from "../../componentGlb/ButtonClick/ButtonClick";

export const MainArtist = () => {
  return (
    <section className="main-artist-container">
      <div className="main-container-text u-wrapper">
        <p className="main-text-want-have">
          <span className="main-text-want">Quieres </span>
          <span className="main-text-have">tener</span>
        </p>
        <p className="main-text-space">Tu perfil de Artista en este espacio?</p>
        <div className="main-container-text-model">
          <p className="main-text-artist-paragraph-1">
            Envía tu idea de grupo a dfhilo@artcademi.com con el asunto
            “Propuesta grupo”. Envía la propuesta con la disciplina que sientas
            que manejas adecuadamente y un propósito claro, ayudar y compartir
            sobre tu arte.
            <br />
            Adjunta tus redes para conocer tu trabajo. Analizamos tu perfil y te
            respondemos en 2(dos) días. Si apruebas “nuestro humilde método”
            abrimos tu grupo en la comunidad Artcademi de Discord.
          </p>
          <div className="container-img-model">
            <img
              className="img-model-artist"
              src={modelArtist}
              alt="modelo tarjeta artista"
            />
          </div>
        </div>
        <ButtonClick />
      </div>
      <div className="container-main-img-text">
        <div className="u-wrapper">
          <p className="main-text-artist-paragraph-2">
            Cuendo crees tu grupo ejemplo: "grupo Cicina saludavle" en nuestra
            cominidad oficial en Discord, puedes traer tu publico o personas que
            te conozcan e invitar a quien quieras, dentro de nuestra comunidad
            vas a ser considerado como un referente en tu campo y personas de
            otros grupos dentro de Artcademi te van a poder conocer y tu vas a
            poder generar soluciones con tus servicios o crear y transmitir con
            tu arte y habilidades. Como parte importante de nuestro enfoque
            queremos que los artistas, las personas que se atraven a emprender
            puedan tener una entrada de dinero constante que le permita vivir de
            lo que ama hacer.
          </p>
        </div>
        <div className="u-wrapper">
          <p className="main-text-artist-paragraph-2">
            En el grupo puedes compartir tus trabajos como “maestro” para
            mostrar lo que sabes, también puedes mostrar tus servicios en esa
            área. Junto a esto, moderaras ese grupo siguiendo el código del
            NinjArt compartir tu experiencia construirá un entorno educativo
            donde todos vamos a aportar y crecer juntos, a partir del arte.
            Cuando pases un periodo de 3 meses siendo el lider de un grupo, te
            solicitaremos detalles para crear tu perfil de Artista NinjArt. Es
            la tarjeta de presentación de tus habilidades en nuestra comunidad.
          </p>
        </div>
      </div>
    </section>
  );
};
