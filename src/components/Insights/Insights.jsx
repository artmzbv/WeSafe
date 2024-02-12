import {React, useState} from "react";
import './Insights.css';
import InsightsCard from '../InsightsCard/InsightsCard';
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function Insights() {
    const [isMore, setMore] = useState(3);
    const [isNews, setNews] = useState('tout');

    const insights = [
        {title:'Nouvelle 1', date: '01.01.2024', type: 'nouvelle', link: copperA, brief: 'Le prix de cuivre a baisse'},
        {title:'Nouvelle 2', date: '01.01.2024', type: 'insight', link: copperB, brief: 'Le prix de cuivre a augmente'},
        {title:'Nouvelle 3', date: '01.01.2024', type: 'nouvelle', link: copperB, brief: 'Ca marche'},
        {title:'Nouvelle 4', date: '01.01.2024', type: 'insight', link: copperB, brief: 'bien'},
        {title:'Nouvelle 5', date: '01.01.2024', type: 'nouvelle', link: copperB, brief: 'Voila'},
        {title:'Nouvelle 6', date: '01.01.2024', type: 'insight', link: copperB, brief: 'Ca marche'},
        {title:'Nouvelle 7', date: '01.01.2024', type: 'nouvelle', link: copperB, brief: 'bien'},
        {title:'Nouvelle 8', date: '01.01.2024', type: 'insight', link: copperB, brief: 'Voila'},
        {title:'Nouvelle 9', date: '01.01.2024', type: 'nouvelle', link: copperB, brief: 'Voila'},
        {title:'Nouvelle 10', date: '01.01.2024', type: 'insight', link: copperB, brief: 'Ca marche'},
        {title:'Nouvelle 11', date: '01.01.2024', type: 'nouvelle', link: copperB, brief: 'Voila'},
        {title:'Nouvelle 12', date: '01.01.2024', type: 'insight', link: copperB, brief: 'Ca marche'},
        {title:'Nouvelle 11', date: '01.01.2024', type: 'nouvelle', link: copperB, brief: 'Voila'},
        {title:'Nouvelle 12', date: '01.01.2024', type: 'insight', link: copperB, brief: 'Ca marche'},
    ]

    const isFilter = (data) => {
        if (isNews === 'tout'){
        return data
        } else if (isNews === 'nouvelles'){
        return data.type = 'nouvelle'
        }else if (isNews === 'insights'){
        return data.type = 'insight'
        }
    }

    const addMoreButton = () => {
        if(insights.length > isMore)
        return <button className='insights__more-button' onClick={() => setMore(isMore+6)}>Plus d'articles</button> 
        else 
        return null
    } 

    return(
        <>
        <section className="insights">
            <div className="insights__topic">
            <h1 className="insights__title">Nouvelles&Insights</h1>
                <h2 className="insights__subtitle">Suivez  les dernières mises à jour sur le marché avec nous !</h2>
            </div>
            <div className='insights__container'>
            <div className='insights__buttons'>    
                <button className={`insights__button ${isNews==='tout' ? 'insights__button_pressed' : 'insights_button_free'}`} id={'1'} onClick={()=>setNews('tout')}>Tout ensemble</button>
                <button className={`insights__button  ${isNews==='insights' ? 'insights__button_pressed' : 'insights_button_free'}`} id={'2'} onClick={()=>setNews('insights')}>Insights</button>
                <button className={`insights__button  ${isNews==='nouvelles' ? 'insights__button_pressed' : 'insights_button_free'}`} id={'3'} onClick={()=>setNews('nouvelles')}>Nouvelles</button>
            </div>
            <div className='insights__map'>
            {insights.filter(isFilter).map((insight, index) => {
                if (index < isMore) {
                return <InsightsCard insight={insight}/>
                }
            })}
            </div>
            </div>
            {addMoreButton()}
        </section>
        </>
    )
}