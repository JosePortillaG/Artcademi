import React from "react";
import "./cardDesign.css";

function CardDesign({ title, subtitle, textcontent }) {
  return (
    <div className="design-your-brand">
      <p className="text-design">{title}</p>
      <p className="text-develop">{subtitle}</p>
      <p className="content-text-design">{textcontent}</p>
      <div className="information-container-button">
        <button className="information-button">
          <a href="/">OBTENER MÁS INFORMACIÓN</a>
        </button>
      </div>
    </div>
  );
}
export default CardDesign;
