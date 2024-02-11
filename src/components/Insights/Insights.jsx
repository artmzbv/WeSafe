import './Insights.css';
import InsightsCard from '../InsightsCard/InsightsCard';
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function Insights() {

    const insights = [
        {title:'They', link: copperA, brief: 'copper'},
        {title:'Me', link: copperB, name: 'copper'},
        {title:'Him', link: copperB, name: 'copper'},
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
            {insights.map((insight) => (
            <InsightsCard insight={insight}/>
        ))}
            </div>
            </div>
            <button className='insights__button insights__button_articles'>Plus d'articles</button>
        </section>
        </>
    )
}