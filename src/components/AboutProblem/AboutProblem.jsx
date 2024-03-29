import './AboutProblem.css';
import circle1 from '../../images/aboutproblem/circle1.svg'
import circle2 from '../../images/aboutproblem/circle2.svg'
import circle3 from '../../images/aboutproblem/circle3.svg'
import circle4 from '../../images/aboutproblem/circle4.svg'

export default function AboutProblem() {
    return(
        <>
        <section className='problem'>
            <h1 className='problem__title problem__title_start'>{'Épargnez autrement...'}</h1>
            {/* je */}
            <div className='problem__container'>
                <div className='problem__card'>
                    <img className='problem__icon' src={circle1} alt='inflation'/>
                    <p className='problem__description'>
                    {"Achetez des métaux critiques de la tranisition numérique, énergétique\nsous forme physique"}
                    {/* {"bold - transition"} */}
                    </p>
                </div>
                <div className='problem__card'>
                <img className='problem__icon' src={circle2} alt='access'/>
                    <p className='problem__description'>
                    {'Sortez une partie de votre épargne des banques et transformez la en un actif réel'}
                    </p>
                </div>
                <div className='problem__card'>
                <img className='problem__icon' src={circle3} alt='opportunities'/>
                    <p className='problem__description'>
                    {'Diluez votre risque en achetant des métaux critiques sur un marché en dollars'} 
                    {/* mais on peut lui apporter des vertus */}
                    </p>
                </div>
                <div className='problem__card'>
                <img className='problem__icon' src={circle4} alt='opportunities'/>
                    <p className='problem__description'>
                    {`Achetez des matières premières dont la demande va croître`} 
                    </p>
                </div>
            </div>
            {/* <h1 className='problem__title problem__title_end'>{'Agissez en "Bonne Mere - Bon pere de famille"'}</h1> */}
        </section>
        </>
    )
}
