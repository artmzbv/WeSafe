import {React, useState} from "react";
import './Insights.css';
import InsightsCard from '../InsightsCard/InsightsCard';
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function Insights() {
    const [isMore, setMore] = useState(3);

    const insights = [
        {title:'Nouvelle 1', link: copperA, brief: 'Le prix de cuivre a baisse'},
        {title:'Nouvelle 2', link: copperB, brief: 'Le prix de cuivre a augmente'},
        {title:'Nouvelle 3', link: copperB, brief: 'Ca marche'},
        {title:'Nouvelle 4', link: copperB, brief: 'bien'},
        {title:'Nouvelle 5', link: copperB, brief: 'Voila'},
    ]


    return(
        <>
        <section className="insights">
            <div className="insights__topic">
            <h1 className="insights__title">Nouvelles&Insights</h1>
                <h2 className="insights__subtitle">Suivez  les dernières mises à jour sur le marché avec nous !</h2>
            </div>
            <div className='insights__container'>
            <div className='insights__buttons'>    
                <button className='insights__button'>Tout ensemble</button>
                <button className='insights__button'>Insights</button>
                <button className='insights__button'>Nouvelles</button>
            </div>
            <div className='insights__map'>
            {insights.map((insight, index) => {
                if (index < isMore) {
                return <InsightsCard insight={insight}/>
                }
            })}
            </div>
            </div>
            <button className='insights__button insights__button_articles' onClick={() => setMore(9)}>Plus d'articles</button>
        </section>
        </>
    )
}