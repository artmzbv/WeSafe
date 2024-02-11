import './Insights.css';

export default function Insights() {
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
            </div>
        </section>
        </>
    )
}