import { Link} from "react-router-dom";
import './AboutMetals.css';
import TransitionGraph from '../TransitionGraph/TransitionGraph'

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
                <button className='metals__subtitle'>Voyez aussi nos insights sur le marche &#129133;</button>
            </Link>
            </div>
            <TransitionGraph className='metals__graphics'/>
            </div>
        </section>
        </>
    )
}
