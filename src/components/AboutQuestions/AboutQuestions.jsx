import { Link  } from "react-router-dom";
import './AboutQuestions.css';

export default function AboutQuestions() {
    return(
        <>
        <section className='questions'>
            <h1 className='questions__title'>Vous avez des questions?</h1>
            <h2 className='questions__subtitle'>Contactez-nous sur wesafew@gmail.com</h2>
            <h2 className='questions__subtitle'>et restez votre info </h2>
            <Link className="questions__link" to="/contact-us">
            ici
            </Link>
        </section>
        </>
    )
}
