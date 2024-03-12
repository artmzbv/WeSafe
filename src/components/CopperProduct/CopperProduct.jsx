import {React, useState} from 'react'
import "./CopperProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import MetalPopup from '../MetalPopup/MetalPopup'
import milberry from '../../images/copperpage/milberry.jpg'
import grenaille from '../../images/copperpage/grenaille.jpeg'  
import sheet from '../../images/copperpage/sheet.jpg'

export default function CopperProduct() {
    const cards = [
        {title:'Cathodes de cuivre grade A', link: sheet, name: 'copper', description: `La cathode de cuivre est le premier produit pur issu du minerai. Après être restée plusieurs semaines dans une électrolyse de sulfate de cuivre, les cathodes sont retirées et sont utilisées comme anodes de cuivre en galvanoplastie`},
        {title:'Cuivre Milberry', link: milberry, name: 'copper', description: `Le cuivre Millberry est composé uniquement de cuivre issu recyclage par dénudage de câble électrique industriel. Il est de couleur rouge brillant. Dans cette qualité n'est toléré aucune adhésion et se compose à 99,9 % de cuivre.`},
        {title:'Grenaille de cuivre', link: grenaille, name: 'copper', description: `Issus du recyclage de câbles la grenaille est utilisée pour différentes applications, principalement dans les fontes de cuivre pour obtenir des lingots, du câble du fil machine ou autres produits dérivés. Leur pureté en cuivre varie entre 98 et 99,5%.`},
    ]

    return(
        <>
        <section className="copper">
        <div className="copper__topic">
                <h1 className="copper__title">Nos produits</h1>
                <h2 className="copper__subtitle">LE CUIVRE</h2>
        </div>
        <h3 className='copper__intro'>{`WeSafe vous propose actuellement 3 produits issus du minerai de cuivre`}</h3>
        <ul> 
            <li className='copper__intro-list'>À différents stade de la Supply Chain, nous couvrons des besoins différenciés des multiples acteurs industriels</li>
            <li className='copper__intro-list'>L'objectif  est de constituer un stock diversifié</li>
            <li className='copper__intro-list'>Chaque produit a ses spécificités, nos conseillers se tiennent à votre disposition pour en discuter</li>
        </ul>
        <div className="copper__container">
        {cards.map((card) => (
            <>
            <MetalCard key={card.title} card={card}/>
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
