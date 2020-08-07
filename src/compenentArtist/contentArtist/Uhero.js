import React from "react";
import "./uhero.css";

function UHero({ title, subtitle, textcontent }) {
  return (
    <div className="container-ubrand-text">
      <h1 className="text-ubrand">
        <span className="brand-text-design">{title}</span>
        <br />
        <span className="brand-text-u">Tu</span>
        <span className="brand-text-brand"> {subtitle}</span>
      </h1>
      <p className="brand-content-text">{textcontent}</p>
    </div>
  );
}
export default UHero;
