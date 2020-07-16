import React from "react";
import Logo from "../images/logo-arcademi.svg";
import discord from "../images/icon-discord.png";
import "./comunidad.css";

export const Comunidad = () => {
  return (
    <section className="community u-wrapper">
      <div className="community-container">
        <div className="community-container-artcademi">
          <a href="#">
            <img src={Logo} alt="logo-artcademi-community" />
          </a>
          <div className="community-text">
            <p>comunidad Discord</p>
          </div>
        </div>
        <div className="community-container-icon-discord">
          <a href="#">
            <img
              className="icon-discord-community"
              src={discord}
              alt="icon.discord"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
