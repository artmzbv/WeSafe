import './AboutProblem.css';
import circle1 from '../../images/circle1.svg'
import circle2 from '../../images/circle2.svg'
import circle3 from '../../images/circle3.svg'

export default function AboutProblem() {
    return(
        <>
        <section className='problem'>
            <h1 className='problem__title'>{'Ne pas mettre tous vos oeufs \ndans le meme panier'}</h1>
            {/* je */}
            <div className='problem__container'>
                <div className='problem__card'>
                    {/* <img className='problem__icon' src={circle1} alt='inflation'/> */}
                    <p className='problem__description'>
                    Je suis Saint-Thomas, j'achete ce que je vois
                    </p>
                </div>
                <div className='problem__card'>
                {/* <img className='problem__icon' src={circle2} alt='access'/> */}
                    <p className='problem__description'>
                    Je suis autonome, ma decision est la mienne
                    </p>
                </div>
                <div className='problem__card'>
                {/* <img className='problem__icon' src={circle3} alt='opportunities'/> */}
                    <p className='problem__description'>
                    Changer le systeme est impossible, notre metier - de lui apporter des vertues 
                    {/* mais on peut lui apporter des vertus */}
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}
