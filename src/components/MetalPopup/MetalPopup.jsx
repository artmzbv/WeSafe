import React from "react";
import "./MetalPopup.css";

function MetalPopup({ card, handleClosePopup }) {

  return (
    <section
      className={`popup popup_opacity-high ${
        card && "popup_opened"
      }`}
    >
      <button
        className="popup__close-button popup__close-button_image"
        type="button"
        onClick={()=> handleClosePopup()}
      ></button>
      <div className="popup__container">
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="image-popup__mask-group"
        />
        <h2 className="image-popup__text">{card ? card.name : ""}</h2>
      </div>
    </section>
  );
}

export default MetalPopup;