import './AboutProblem.css';
import circle1 from '../../images/circle1.svg'
import circle2 from '../../images/circle1.svg'
import circle3 from '../../images/circle1.svg'

export default function AboutProblem() {
    return(
        <>
        <section className='problem'>
            <h1 className='problem__title'>Ca vous concerne?</h1>
            <div className='problem__container'>
                <div className='problem__card'>
                    <img className='problem__icon' src={circle1} alt='inflation'/>
                    <p className='problem__description'>
                    Incertitude envers le contexte economique et geopolitique conduit a l’inflation et baisse de l’epargne
                    </p>
                </div>
                <div className='problem__card'>
                <img className='problem__icon' src={circle2} alt='access'/>
                    <p className='problem__description'>
                    Seule une minorité a accès à des alternatives aux produits financiers
                    </p>
                </div>
                <div className='problem__card'>
                <img className='problem__icon' src={circle3} alt='opportunities'/>
                    <p className='problem__description'>
                    La transition écologique crée de nouvelles opportunités d'investissement
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}
