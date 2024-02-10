import {React, useState} from 'react'
import "./MetalCards.css"

export default function MetalCard({card, handleClick}) {
    // const [openPopup, setOpenPopup] = useState(false);

    // function handleClick() {
    //     setOpenPopup(true);
    //   }

    return(
        <>
        <section className="types">
        <h1 className="types__name">{card.title}</h1>
            <img 
            className="types__images"
            src={card.link}
            alt={card.name}
            onClick={handleClick}
            />
            <h1 className="types__name">{card.title}</h1>
        </section>
        </>
    )
}