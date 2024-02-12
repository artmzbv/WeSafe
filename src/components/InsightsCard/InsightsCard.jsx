import './InsightsCard.css';
import { Route, Link } from "react-router-dom";
import Article from "../Article/Article"

export default function InsightsCard({insight}) {
    return(
        <>
        <section className='insights-card'>
            <img className='insights-card__image'
             src={insight.link}
             alt={insight.title}
             />
            <div className='insights-card__container'>
            <h1 className='insights-card__title'>{insight.title}</h1>
            <p className='insights-card__date'>{insight.date} #{insight.type}</p>
            <p className='insights-card__description'>{insight.brief}</p>
            {/* https://www.w3schools.com/jsref/jsref_regexp_i.asp */}
            <Link to={`./${insight.date.replace(/\./g, '-').toLowerCase()}/${insight.title.replace(/\s+/g, '-').toLowerCase()}`} element={Article}>
            {/* <Link to={`./${insight.title}`}> */}
            <div className='insights-card__link'>Lire la suite</div>
            </Link>
            <div className='insights-card__square'></div>
            </div>
        </section>
        </>
    )
}