import {Link} from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return(
        <>
        <footer className='footer'>
        <div className='footer__info'>
        {/* <Link className='footer__link footer__link_title' to="./offer">
            Notre Offre
        </Link> */}
            <ul className='footer__list'>
            <li className='footer__outline'>Metaux</li>
            <li className="footer__list-item">
            <Link className='footer__link footer__link_subtitle' to="./copper">
                Cuivre
            </Link>
            </li>
            <li className="footer__list-item">
            <Link className='footer__link footer__link_subtitle' to="./nickel">
                Nickel
            </Link>
            </li>
            <li className="footer__list-item">
            <Link className='footer__link footer__link_subtitle' to="./cobalt">
                Cobalt
            </Link>
            </li>
            </ul>
        <Link className='footer__link footer__link_title' to="./insights">
            <div className='footer__link'>Le Marché</div>
        </Link>
        <Link className='footer__link footer__link_title' to="./about-us">
            <div className='footer__link'>Qui sommes-nous?</div>
        </Link>
        <Link className='footer__link footer__link_title' to="./contact-us">
            <div className='footer__link'>Contactez-nous</div>
        </Link>  
        </div>
        <div className='footer__reg'>
            <p className="footer__reg-copyright">© WeSafe 2024</p>
            <Link className="footer__reg-link" to="./legal-notice">{'Mentions légales'}</Link>
        </div>
        </footer>
        </>
    )
}