import {React, useState, useEffect} from "react";
import "./MetalPopup.css";

function MetalPopup({ card, handleClosePopup }) {

  const [isButtonHovered, setButtonHover] = useState(false)
  
  //Escape function
  //https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
      useEffect(() => {
        function onKeyup(e) {
          //define event listener
          if (e.key === 'Escape')
           handleClosePopup()
        }
          //register our listener
        window.addEventListener('keyup', onKeyup);
          //unregister our listener
        return () => window.removeEventListener('keyup', onKeyup);
      }, []);

  return (
    <section className="popup">
      <div className="popup__background" onMouseOver={()=>setButtonHover(true)} onMouseOut={()=>setButtonHover(false)} onClick={handleClosePopup}></div>
      <button
        className={`popup__close-button popup__close-button_image ${isButtonHovered ? 'popup__close-button_hover' : null}`}
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