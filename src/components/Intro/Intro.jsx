import './Intro.css';
import SafeBox from "../../images/safebox.jpeg"
import { Link } from "react-router-dom";

export default function Intro() {
    return(
        <>
        <section className='intro'>
            <div className='intro__text'>
                <h1 className='intro__title'>Leader européen d'épargne en materiaux critiques</h1>  
                <h2 className='intro__description'>Créer du patrmoine hors banques, hors système</h2>
                <Link to="/contact-us">
                <button className='intro__button'>Contactez-nous</button>
                </Link>
            </div>
            <img className="intro__picture" src={SafeBox}></img>
        </section>
        </>
    )
}