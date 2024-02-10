import React from "react";
import "./MetalPopup.css";

function MetalPopup({ card, handleClosePopup }) {

  return (
    <section className="popup">
      <button
        className="popup__close-button popup__close-button_image"
        type="button"
        onClick={handleClosePopup}
      ></button>
      <div className="popup__container">
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup__image"
        />
        <h2 className="popup__title">{card ? card.title : ""}</h2>
        <p className="popup__text">{card ? card.description : ""}</p>
      </div>
    </section>
  );
}

export default MetalPopup;