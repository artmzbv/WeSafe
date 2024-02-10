import './AboutSolution.css';
import graphics from '../../images/graphics.png'

export default function AboutSolution() {
    return(
        <>
        <section className='solution'>
            <h1 className='solution__title'>Diversifier votre épargne avec les métaux industriels de la transition énergétique</h1>
            <div className='solution__container'>
                <ul className='solution__list'>
                    <li className='solution__item'>
                        Epargne alternative
                    </li>
                    <li className='solution__item'>
                        Epargne vertueuse
                    </li>
                    <li className='solution__item'>
                        Profits exponentials
                    </li>
                    <li className='solution__item'>
                        Transparence
                    </li>
                </ul>
                <div className='solution__box'>
                    {/* <img className='solution__graphics' src={graphics}></img> */}
                </div>
            </div>
        </section>
        </>
    )
}