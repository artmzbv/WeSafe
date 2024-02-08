import './Intro.css';
import SafeBox from "../../images/safebox.jpeg"

export default function Intro() {
    return(
        <>
        <section className='intro'>
            <div className='intro__text'>
                <h1 className='intro__title'>Investissez avec nous</h1>
                <h2 className='intro__description'>Votre fournisseur dans le monde des mataux</h2>
            </div>
            <img className="intro__picture" src={SafeBox}></img>
        </section>
        </>
    )
}