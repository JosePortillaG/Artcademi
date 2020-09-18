import React from "react";
import discord from "../images/icon-discord.png";
import { Link } from "react-router-dom";
import { ArtLogo } from "../../componentGlb/Artlogo/ArtLogo";
import Url from "../images/artcademi-logo.svg";
import "./comunidad.css";

export const Comunidad = () => {
  return (
    <section className="community">
      <div className="community-container">
        <ArtLogo Logo={Url} subtitle="Comunidad Discord" />
        <div className="community-container-icon-discord">
          <Link to="/">
            <img
              className="icon-discord-community"
              src={discord}
              alt="icon.discord"
            />
          </Link>
        </div>
      </div>
      <div className="community-container-discord">
        <widgetbot
          className="community-discord"
          server="705202501967806514"
          channel="#reglas"
        ></widgetbot>
      </div>
    </section>
  );
};
