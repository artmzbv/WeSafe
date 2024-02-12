import './InsightsCard.css';

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
            <div className='insights-card__link'>Lire la suite</div>
            <div className='insights-card__square'></div>
            </div>
        </section>
        </>
    )
}