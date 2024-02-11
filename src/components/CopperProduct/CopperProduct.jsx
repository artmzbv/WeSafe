import {React, useState} from 'react'
import "./CopperProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import MetalPopup from '../MetalPopup/MetalPopup'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function CopperProduct() {
    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'copper'},
        {title:'Cuivre Milberry', link: copperB, name: 'copper', description: 'The highest quality copper scrap. It consists of No. 1 bare, uncoated, unalloyed copper wire, commonly known as Bare Bright copper wire. Wire gauge subject to agreement between buyer and seller.'},
        {title:'Bobine de cuivre', link: copperB, name: 'copper'},
    ]

    return(
        <>
        <section className="copper">
        <div className="copper__topic">
                <h1 className="copper__title">Nos produits</h1>
                <h2 className="copper__subtitle">CUIVRE</h2>
        </div>
        <h3 className='copper__intro'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
        <p className='copper__description'>Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala</p>
        <div className="copper__options">
        {cards.map((card) => (
            <>
            <MetalCard card={card}/>
            </>
        ))}
        {/* {popup ? (<MetalPopup handleClosePopup={handleClosePopup} />) : null} */}
        </div>
            <Warehouse/>
        </section>
        {/* {popup ? (<MetalPopup card={card} handleClosePopup={handleClosePopup} />) : null} */}
        </>
    )
}
