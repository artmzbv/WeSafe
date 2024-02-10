import {React, useState} from 'react'
import "./MetalCard.css"
import MetalPopup from '../MetalPopup/MetalPopup';

export default function MetalCard({card, handleOpenPopup}) {
    const [popup, setPopup] = useState(false);
    // const cards=['']
    function handleOpenPopup() {
        setPopup(true);
    }
    function handleClosePopup() {
        setPopup(false);
    }
    return(
        <>
    {popup ? (<MetalPopup card={card} handleClosePopup={handleClosePopup} />) : null}
        <section className="types" onClick={()=> handleOpenPopup()}>
        <h1 className="types__name">{card.title}</h1>
            <img 
            className="types__images"
            src={card.link}
            alt={card.name}
            />
            <h1 className="types__name">{card.title}</h1>
        </section>
        </>
    )
}