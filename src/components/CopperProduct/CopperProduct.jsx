import {React, useState} from 'react'
import "./CopperProduct.css"
import Storage from '../Storage/Storage'
import MetalCard from '../MetalCard/MetalCard'
import MetalPopup from '../MetalPopup/MetalPopup'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function CopperProduct() {
    const [popup, setPopup] = useState(false);
    // const cards=['']
    function handleOpenPopup() {
        setPopup(true);
    }
    function handleClosePopup() {
        setPopup(false);
    }

    console.log(popup)


    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'copper'},
        {title:'Cuivre Milberry', link: copperB, name: 'copper'},
        {title:'Bobine de cuivre', link: copperB, name: 'copper'},
    ]

    return(
        <>
        <section className="copper">
        <div className="copper__topic">
                <h1 className="copper__title">Nos produits</h1>
                <h2 className="copper__subtitle">CUIVRE</h2>
        </div>
        <div className="copper__options">
        {cards.map((card) => (
            <MetalCard card={card} handlePopup={handleOpenPopup}/>
        ))}
        </div>
            <Storage/>
        </section>
        {popup ? (<MetalPopup handleClosePopup={handleClosePopup} />) : null}
        </>
    )
}
