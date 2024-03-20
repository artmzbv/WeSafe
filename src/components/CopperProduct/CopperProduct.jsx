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
                <h1 className="copper__title">LE CUIVRE</h1>
                {/* <h2 className="copper__subtitle">LE CUIVRE</h2> */}
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
        <h4 className='copper__list-title'>Légende</h4>
        <ul className='copper__list copper__list_scale'>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-column-title'></p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-column-title'>1</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-column-title'>2</p></li>
        <li className='copper__bullit '><p className='copper__bullit-column-title'>3</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-row-title'>Commande min / Prix</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>moins de 5 000 euros</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>de 5 à 10 000 euros</p></li>
        <li className='copper__bullit'><p className='copper__bullit-text'>plus de 10 000 euros</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-row-title'>Coût du Stockage, assurance, maintenance et administration</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>1% HT annuel du montant</p></li> 
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>1.25 % HT annuel du montant</p></li> 
        <li className='copper__bullit'><p className='copper__bullit-text'>1.5 % HT annuel du montant</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-row-title'>Liquidité prévisionnelle</p></li>	
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>médium moins, 4 à 6 mois</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>médium plus, 2 à 3 mois</p></li>
        <li className='copper__bullit'><p className='copper__bullit-text'>rapide 1 mois</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-row-title'>Taille de Marché Mondial</p></li>	
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>en milliers de tonnes par an</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>en millions de tonnes par an</p></li>
        <li className='copper__bullit'><p className='copper__bullit-text'>en dizaine de millions de tonnes par an</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-row-title'>Durée de détention</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>0 à 5 ans</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text'>5 à 10 ans</p></li>
        <li className='copper__bullit'><p className='copper__bullit-text'>+ de 10 ans</p></li>
        </ul>

        <ul className='copper__list copper__list_price'>
        <li className='copper__bullit copper__bullit_border copper__bullit_dist'><p className='copper__bullit-column-title'></p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-column-title'>OUI</p></li>
        <li className='copper__bullit'><p className='copper__bullit-column-title'>NON</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-row-title'>Prix Régulé</p></li>
        <li className='copper__bullit copper__bullit_border'><p className='copper__bullit-text-price'>London Metal Exchange</p></li>
        <li className='copper__bullit '><p className='copper__bullit-text-price'>Marché de gré à gré</p></li>
        </ul>
        {/* {popup ? (<MetalPopup handleClosePopup={handleClosePopup} />) : null} */}
            <Warehouse/>
        </section>
        {/* {popup ? (<MetalPopup card={card} handleClosePopup={handleClosePopup} />) : null} */}
        </>
    )
}
