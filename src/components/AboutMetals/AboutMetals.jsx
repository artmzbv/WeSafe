import { Link} from "react-router-dom";
import './AboutMetals.css';
import TransitionGraph from '../TransitionGraph/TransitionGraph'
import refsvg from '../../images/ref.svg'

export default function AboutMetals() {
    return(
        <>
        <section className='metals'>
        <div className='metals__info'>
        <div className='metals__container'>
            <h1 className='metals__title'>Pourquoi les métaux critiques ?</h1>
            <div className='metals__description'>
            <p className='metals__paragraph'>
            Ces métaux constituent la base des transitions numérique et énergétique.
            </p>
            <p className='metals__paragraph'>
            La sécurisation de ces métaux représente un enjeu de souveraineté majeur ainsi qu’une opportunité d’épargne exceptionnelle pour les 30 ans à venir.
            </p>
            </div>
            {/* <p className='metals__paragraph'>
            Les prix des metaux vont augmenter au cours des 20 prochaines années
            </p> */}
                <Link className='metals__link-insights' to="/insights">
                <button className='metals__subtitle'>{'Voyez aussi nos insights sur le marche  '}
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L19.5 0.485929" stroke="white" stroke-width="4"/>
                <path d="M19.0226 15L19.0131 -0.0499983" stroke="white" stroke-width="4"/>
                <path d="M19.0132 0.973145L5 0.986549" stroke="white" stroke-width="4"/>
                </svg>
                </button>
            </Link>
            </div>
            <TransitionGraph className='metals__graphics'/>
            </div>
        </section>
        </>
    )
}
