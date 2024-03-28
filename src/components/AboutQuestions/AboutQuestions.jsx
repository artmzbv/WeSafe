import { Link  } from "react-router-dom";
import './AboutQuestions.css';

export default function AboutQuestions() {
    return(
        <>
        <section className='questions'>
            <h1 className='questions__title'>Vous avez des questions ?</h1>
            <h2 className='questions__subtitle'>Contactez-nous : +33 (0) 1 83 64 66 18</h2>
            <h2 className='questions__subtitle'>ou&nbsp;
            <Link className="questions__link" to="/contact-us">
            ici
            </Link></h2>
            <div className='questions__attention'>
            <h2 className='questions__subtitle questions__subtitle_attention'>Pour votre information</h2>
            <p className='questions__paragraph'>{'Nous ne sommes ni conseillers financiers, ni conseillers patrimoniaux.'}</p>
            <p className='questions__paragraph'>{'Toutes nos informations sont, par nature, génériques, mais non-exhaustives.'}</p>
            <p className='questions__paragraph'>{`Elles ne tiennent pas compte de votre situation personnelle et ne constituent en aucune façon des recommandations personnalisées en vue de la réalisation de transactions et ne peuvent être assimilées à une prestation de conseil en investissement financier.`}</p>
            <p className='questions__paragraph'>{`Notre proposition de service n'est pas d'ordre spéculatif mais une proposition d'achat alternatif. Les métaux et matières premières sont par nature très volatiles, faites vous accompagner par un professionnel du patrimoine pour toute question d'ordre financier.`}</p>
            <p className='questions__paragraph'>{`Notre analyse ne tient compte que des projections de l'offre et de la demande.`}</p>
            </div>
        </section>
        </>
    )
}
