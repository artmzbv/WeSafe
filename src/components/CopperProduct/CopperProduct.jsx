import {React, useState} from 'react'
import "./CopperProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import MetalPopup from '../MetalPopup/MetalPopup'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'
import milberry from '../../images/copperpage/milberry.jpg'
import grenaille from '../../images/copperpage/grenaille.jpeg'  

export default function CopperProduct() {
    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'copper', description: `La cathode de cuivre est le premier produit pur issu du minerai. Après être restée plusieurs semaines dans une électrolyse de sulfate de cuivre, les cathodes sont retirées et sont utilisées comme anodes de cuivre en galvanoplastie`},
        {title:'Cuivre Milberry', link: milberry, name: 'copper', description: `Le cuivre Millberry est composé uniquement de cuivre issu recyclage par dénudage de câble électrique industriel. Il est de couleur rouge brillant. Dans cette qualité n'est toléré aucune adhésion et se compose à 99,9 % de cuivre.`},
        {title:'Grenaille de cuivre', link: grenaille, name: 'copper', description: `Issus du recyclage de câbles la grenaille est utilisée pour différentes applications, principalement dans les fontes de cuivre pour obtenir des lingots, du câble du fil machine ou autres produits dérivés. Leur pureté en cuivre varie entre 98 et 99,5%.`},
    ]

    return(
        <>
        <section className="copper">
        <div className="copper__topic">
                <h1 className="copper__title">Nos produits</h1>
                <h2 className="copper__subtitle">CUIVRE</h2>
        </div>
        <h3 className='copper__intro'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
          <p className='copper__description'>
            Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
            Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
            Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
            Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
        </p>
        <div className="copper__container">
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
