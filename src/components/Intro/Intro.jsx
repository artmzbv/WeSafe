import './Intro.css';
import SafeBox from "../../images/safebox.jpeg"

export default function Intro() {
    return(
        <>
        <section className='intro'>
            <div className='intro__text'>
                <h1 className='intro__title'>Leader européen d'epargne en materiaux critiques</h1>  
                <h2 className='intro__description'>Créer du patrmoine hors banques, hors système</h2>
            </div>
            <img className="intro__picture" src={SafeBox}></img>
        </section>
        </>
    )
}