import React, {useEffect, useState} from 'react';
import './Intro.css';
import SafeBox from "../../images/safebox.jpeg"
import { Link } from "react-router-dom";

export default function Intro() {
    return(
        <>
        <section className='intro'>
            <div className='intro__text'>
                <h1 className='intro__title'>Première Plateforme Européenne d'Épargne en Matériaux Critiques</h1>  
                {/* <h1 className='intro__title'>Leader Europeen</h1>
                <h1 className='intro__title'>d'Epargne</h1>
                <h1 className='intro__title'>Metaux Critiques</h1> */}
                <h2 className='intro__description'>{`Diversifiez votre patrimoine avec\ndes métaux sous forme physique`}</h2>
                <Link to="/contact-us">
                <button className='intro__button'>Contactez-nous</button>
                </Link>
                <p className='intro__mention'>{`Ce site est un site de trading et stockage, nous ne conseillons pas la spéculation, ce n'est pas notre métier`}</p>
            </div>
            <div className="intro__picture" src={SafeBox}></div>
            {/* <img src={'https://wesafe.store/wp-content/uploads/2024/02/logo-banniere-bleu-En.jpg'}></img> */}
        </section>
        </>
    )
}