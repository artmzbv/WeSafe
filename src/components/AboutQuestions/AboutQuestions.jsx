import { Link  } from "react-router-dom";
import './AboutQuestions.css';

export default function AboutQuestions() {
    return(
        <>
        <section className='questions'>
            <h1 className='questions__title'>Vous avez des questions?</h1>
            <h2 className='questions__subtitle'>Contactez-nous sur wesafew@gmail.com</h2>
            <h2 className='questions__subtitle'>et restez votre info&nbsp;
            <Link className="questions__link" to="/contact-us">
            ici
            </Link></h2>
            <div className='questions__attention'>
            <h2 className='questions__subtitle questions__subtitle_attention'>Attention</h2>
            <p className='questions__paragraph'>{'Nous ne sommes ni conseilleurs financiers, ni conseilleurs de patrimoine.'}</p>
            <p className='questions__paragraph'>{'Notre metier est les transactions sur les materieux critiques.'}</p>
            </div>
        </section>
        </>
    )
}
