import {React, useState} from 'react'
import "./MetalCard.css"
import MetalPopup from '../MetalPopup/MetalPopup';

export default function MetalCard({card, handleOpenPopup}) {
    const [popup, setPopup] = useState(false);
    const [hover, setHover] = useState(false)
    // const cards=['']
    function handleOpenPopup() {
        setPopup(true);
    }

    function handleClosePopup() {
        setPopup(false);
    }

    const setRating = (num) => {
        if (num === 1) {
        return(
            <>
            <div className='types__rating types__rating_filled'></div>
            <div className='types__rating'></div>
            <div className='types__rating'></div>  
            </>
        )
    } else if (num === 2) {
        return(
        <>
        <div className='types__rating types__rating_filled'></div>
        <div className='types__rating  types__rating_filled'></div>
        <div className='types__rating'></div>  
        </>)
    }else {
        return(
        <>
        <div className='types__rating types__rating_filled'></div>
        <div className='types__rating types__rating_filled'></div>
        <div className='types__rating types__rating_filled'></div>  
        </>)
        } 
    }

    console.log(typeof(card.commande))
    return(
        <>
    {popup ? (<MetalPopup card={card} handleClosePopup={handleClosePopup} />) : null}
        <section className="types" onClick={()=> handleOpenPopup()}>
        <div className="types__info" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        <h1 className="types__title">{card.title}</h1>
        <ul className="types__list">
        <li className="types__point">
        <p className='types__point-name'>
            Commande min/Prix
        </p>
            {setRating(card.commande)}
        </li>
        <li className="types__point">
        <p className='types__point-name'>
            Cout du Stockage
            </p>
            {setRating(card.stockage)}
        </li>
        <li className="types__point">
        <p className='types__point-name'>
        Liquidité
        </p>
            {setRating(card.liquidite)}
        </li>
        <li className="types__point">
        <p className='types__point-name'>
        Taille de Marché
        </p>
            {setRating(card.taille)}
        </li>
        <li className="types__point">
        <p className='types__point-name'>
        Durée de deténtion
        </p>
            {setRating(card.duree)}
        </li>
        <li className="types__point">
        <p className='types__point-name'>
        Prix Régulé
        </p>
        <p className='types__point-price'>{card.prix}</p>
        </li>
        </ul>
        </div>
            <img 
            className={`types__image  ${hover ? 'types__image_hover' : null}`}
            onMouseOver={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            src={card.link}
            alt={card.name}
            />
            {/* <h1 className="types__name">{card.title}</h1> */}
        </section>
        </>
    )
}