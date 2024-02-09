import {Link} from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return(
        <>
        <footer className='footer'>
        <Link className='footer__link footer__link_title' to="./offer">
            Notre Offre
        </Link>
            <ul className='footer__list'>
            <li className='footer__outline'>Metaux</li>
            <li className="footer__list-item">
            <Link className='footer__link footer__link_subtitle' to="./copper">
                Cuivre
            </Link>
            </li>
            <li className="footer__list-item">
            <Link className='footer__link footer__link_subtitle' to="./aluminium">
                Aluminium
            </Link>
            </li>
            <li className="footer__list-item">
            <Link className='footer__link footer__link_subtitle' to="./nickel">
                Nickel
            </Link>
            </li>
            </ul>
        <Link className='footer__link footer__link_title' to="./insights">
            <div className='footer__link'>Insights</div>
        </Link>
        <Link className='footer__link footer__link_title' to="./about-us">
            <div className='footer__link'>Qui sommes-nous?</div>
        </Link>
        <Link className='footer__link footer__link_title' to="./contact-us">
            <div className='footer__link'>Contactez-nous</div>
        </Link>  
        </footer>
        </>
    )
}