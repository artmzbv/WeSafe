import {React} from 'react'
import "./MetalCard.css"

export default function MetalCard({card, handleOpenPopup}) {
    return(
        <>
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