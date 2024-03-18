import { Link  } from "react-router-dom";
import './AboutQuestions.css';

export default function AboutQuestions() {
    return(
        <>
        <section className='questions'>
            <h1 className='questions__title'>Vous avez des questions?</h1>
            <h2 className='questions__subtitle'>Contactez-nous sur contact@wesafe.store</h2>
            <h2 className='questions__subtitle'>ou restez votre info&nbsp;
            <Link className="questions__link" to="/contact-us">
            ici
            </Link></h2>
            <div className='questions__attention'>
            <h2 className='questions__subtitle questions__subtitle_attention'>Information</h2>
            <p className='questions__paragraph'>{'Nous ne sommes ni conseillers financiers,\nni conseillers patrimoniaux.'}</p>
            <p className='questions__paragraph'>{'Notre metier est la transaction\n et le stockage en materieux critiques.'}</p>
            </div>
        </section>
        </>
    )
}
