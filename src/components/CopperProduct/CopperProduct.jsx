import {React, useState} from 'react'
import { Link  } from "react-router-dom";
import "./CopperProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import MetalPopup from '../MetalPopup/MetalPopup'
import milberry from '../../images/copperpage/milberry.jpg'
import grenaille from '../../images/copperpage/grenaille.jpg'  
import sheet from '../../images/copperpage/sheet.jpg'

export default function CopperProduct() {
    const cards = [
        {title:'Cathodes de cuivre\ngrade A', link: sheet, commande:2, stockage:1, liquidite:1, taille:3, duree:2, prix: 'Oui', name: 'copper', 
        description: `La cathode de cuivre est le premier produit pur issu du minerai. Après être restée plusieurs semaines dans une électrolyse de sulfate de cuivre, les cathodes sont retirées et sont utilisées comme anodes de cuivre en galvanoplastie`},
        {title:'Cuivre Milberry', link: milberry, commande:1, stockage:3, liquidite:2, taille:2, duree:1, prix: 'Non', name: 'copper', 
        description: `Le cuivre Millberry est composé uniquement de cuivre issu du recyclage par dénudage de câbles électriques.\nIl est de couleur rouge brillant. Dans cette qualité n'est toléré aucune adhésion et se compose à 99,9 % de cuivre.`},
        {title:'Grenaille de cuivre', link: grenaille, commande:1, stockage:2, liquidite:3, taille:2, duree:1, prix: 'Non', name: 'copper', 
        description: `Issue du recyclage de câbles la grenaille est utilisée pour différentes applications, principalement dans les fontes de cuivre pour obtenir des lingots, du câble ou autres produits dérivés. Leur pureté en cuivre varie entre 98% et 99,5%.`},
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
            <li className='copper__intro-list'>L'objectif est de constituer un stock diversifié</li>
            <li className='copper__intro-list' >{`Chaque produit a ses spécificités, `}
            <Link className='copper__intro-list-link' to="/contact-us">{` nos conseillers se tiennent à votre disposition pour en discuter`}
            </Link>
            </li>
        </ul>
        <div className="copper__container">
        {cards.map((card) => (
            <>
            <MetalCard key={card.title} card={card}/>
            </>
        ))}
        </div>
        <ul className='copper__list'>
        <li className='copper__bullit'>
            Commande min/Prix :
            1 = moins de 5 000 euros 
            2 = de 5 à 10 000 euros
            3 = plus de 10 000 euros 
            </li>
            <li className='copper__bullit'>
            Coût du Stockage, assurance, maintenance et administration
            1 = 1% HT annuel du montant 
            2 = 1.25 % HT annuel du montant 
            3 = 1.5 % HT annuel du montant 
            </li>
            <li className='copper__bullit'>
            Liquidité prévisionnelle : 	
            1 = medium moins, 4 à 6 mois
            2 = medium plus, 2 à 3 mois  
            3 = rapide 1 mois 
            </li>
            <li className='copper__bullit'>
            Taille de Marché Mondial : 	
            1 = en milliers de tonnes par ans
            2 = en millions de tonnes par ans
            3 = en dizaine de millions de tonnes par ans 
            </li>
            <li className='copper__bullit'>
            Durée de détention : 	1 = 0 à 5 ans
            2 = 5 à 10 ans  
            3 = + de 10 ans
            Prix Régulé : 
            OUI = London Metal Exchange
            NON = Marche de gré à gré
            </li>
        </ul>
        {/* {popup ? (<MetalPopup handleClosePopup={handleClosePopup} />) : null} */}
            <Warehouse/>
        </section>
        {/* {popup ? (<MetalPopup card={card} handleClosePopup={handleClosePopup} />) : null} */}
        </>
    )
}
