import {React} from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

export default function PageNotFound () {
    return (
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
         <h2 className="not-found__text">La page que vous recherchez n’a pas été trouvée</h2> 
        <img className="not-found__image" src={''} alt=""/>
        <Link to="/">
            <button className="not-found__button">
            Retour à l'accueil
            </button>
        </Link>
      </section>
    )
  }