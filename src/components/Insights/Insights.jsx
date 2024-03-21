import {React, useState} from "react";
import './Insights.css';
import InsightsCard from '../InsightsCard/InsightsCard';
import {insights} from '../../utils/utils'
import {Helmet} from 'react-helmet-async'

export default function Insights() {
    const [isMore, setMore] = useState(3);
    const [isNews, setNews] = useState('tout');

    function filterInsights (insight) {
        if (isNews === 'tout'){
            return insight
        }else if (isNews === 'nouvelles'){
            return insight.type === 'nouvelle';
        }else if (isNews === 'insights'){
            return insight.type === 'insight'
    }
    }

    const addMoreButton = () => {
        if(insights.filter(filterInsights).length > isMore)
        return <button className='insights__more-button' onClick={() => setMore(isMore+6)}>Plus d'articles</button> 
        else 
        return null
    } 

    return(
        <>
        <Helmet>
            <title>Marché</title>
            <meta name="description" content="Voyez nos nouvelles et insights sur les marchés des métaux critiques. Page en cours de création"></meta>
            <link rel="canonical" href="/insights"></link>
        </Helmet>
        <section className="insights">
            <div className="insights__topic">
            <h1 className="insights__title">Nouvelles & Insights</h1>
                {/* <h2 className="insights__subtitle">Suivez  les dernières mises à jour sur le marché avec nous</h2> */}
                <h2 className="insights__subtitle">Page en cours de création</h2>
            </div>
            <div className="insights__page"></div>
            {/* <div className='insights__container'>
            <div className='insights__buttons'>    
                <button className={`insights__button ${isNews==='tout' ? 'insights__button_active' : 'insights_button_inactive'}`}  onClick={()=>setNews('tout')}>Tout</button>
                <button className={`insights__button  ${isNews==='insights' ? 'insights__button_active' : 'insights_button_inactive'}`} onClick={()=>setNews('insights')}>Insights</button>
                <button className={`insights__button  ${isNews==='nouvelles' ? 'insights__button_active' : 'insights_button_inactive'}`} onClick={()=>setNews('nouvelles')}>Nouvelles</button>
            </div>
            <div className='insights__map'> */}
            {/* В индексе мапа все равно сохраняется изначальный массив */}
            {/* {insights.filter(filterInsights).map((insight, index) => {
                if (isMore > index) {
                return <InsightsCard key={insight.title} insight={insight}/>
                }
            })}
            </div>
            </div>
            {addMoreButton()} */}
        </section>
        </>
    )
}