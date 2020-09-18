import React from "react";
import imgHeaderdFhilo from "../../component/images/artcademi-modeloArtistadFhilo.png";
import dFhiloPhoto from "../../component/images/artcademi-dfhilofoto.png";
import dfhiloHoz from "../../component/images/dfhilo-hoz.png";
import icondFhilo from "../../component/images/icon-dfhilo.png";
import iconBe from "../../component/images/icon-be.png";
import iconLinkedin from "../../component/images/icon-linkedin.png";
import background from "../../component/images/fondo-patreon.png";
import "./dFhilo.css";

export const Dfhilo = () => {
  return (
    <section>
      <img
        className="img-header-dfhilo"
        src={imgHeaderdFhilo}
        alt="img-artist-dfhilo"
      />
      <div className="dfhilo-container">
        <div className="container-photo-dfhilo">
          <img
            className="img-photo-dfhilo"
            src={dFhiloPhoto}
            alt="foto dfhilo"
          />
        </div>
        <div className="container-component-dfhilo">
          <div className="component-text">
            <div className="dfhilo-nick-name">
              <p className="dfhilo-text-dfhilo">dFhilo -</p>
              <p className="dfhilo-text-junior"> Junior Portilla</p>
            </div>
            <p className="dfhilo-text-designer">Diseñador</p>
            <p className="dfhilo-text-designer-content">
              Hola! soy diseñador gráfico UX/UI musical, asi defino mis
              capacidades y donde las aplico. Reunido tengo más de 10 años de
              experiencia en creación de marca, diseño web, diseño musical y
              diseño de letras. Y puedo ayudarte en lo que buscas.
            </p>
          </div>
          <div className="logo-dfilo-hoz">
            <img src={dfhiloHoz} alt="img logo dfhilo" />
          </div>
          <div className="component-nets">
            <div className="container-icon-dfhilo">
              <div className="container-nets-be">
                <a href="www.behacen.net/artcademi">
                  <img className="icon-be-dfhilo" src={iconBe} alt="icon Be" />
                </a>
                <a className="dfhilo-nets-be" href="www.behacen.net/artcademi">
                  www.behacen.net/artcademi
                </a>
              </div>
              <div className="container-nets-linkedin">
                <a href="www.linkedin.com/in/juniorportilla/">
                  <img
                    className="icon-linkedin-dfhilo"
                    src={iconLinkedin}
                    alt="icon Linkedin"
                  />
                </a>
                <a
                  className="dfhilo-nets-linkedin"
                  href="www.linkedin.com/in/juniorportilla/"
                >
                  www.linkedin.com/in/juniorportilla/
                </a>
              </div>
              <div>
                <img
                  className="icon-dfhilo-dfhilo"
                  src={icondFhilo}
                  alt="icon dfhilo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-frace-all">
        <img
          className="background-img"
          src={background}
          alt="fondo de texto artcademi"
        />
        <div className="container-frace">
          <p>
            "si queremos un mundo de paz y de justicia hay que poner
            decididamente la inteligenci al servicio del amor."
            <p className="dfhilo-address">Antoine de Saint-Exupery</p>
          </p>
        </div>
      </div>
    </section>
  );
};
