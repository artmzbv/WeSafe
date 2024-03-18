import './AboutProduct.css';
import {React, useState, useRef, useEffect}  from "react";
import livraison from '../../images/aboutproduct/livraison.jpg'
import stockage from '../../images/aboutproduct/stockage.jpg'
import commande from '../../images/aboutproduct/commande.jpg'
import selection from '../../images/aboutproduct/selection.jpg'
import revente from '../../images/aboutproduct/revente.jpg'

export default function AboutProduct() {
    const [isIntersectingSel, setIsIntersectingSel] = useState(false);
    const [isIntersectingCom, setIsIntersectingCom] = useState(false);
    const [isIntersectingLiv, setIsIntersectingLiv] = useState(false);
    const [isIntersectingRev, setIsIntersectingRev] = useState(false);
    // store a reference to a DOM element 

    const selRef = useRef(null);
    const comRef = useRef(null);
    const livRef = useRef(null);
    const revRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          // console.log(entry)
          setIsIntersectingSel(entry.isIntersecting);
        },{ rootMargin: "0px" });
        observer.observe(selRef.current);
        return () => observer.disconnect();
      }, []);
    
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingCom(entry.isIntersecting);
        },{ rootMargin: "0px" });
        observer.observe(comRef.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingLiv(entry.isIntersecting);
        },{ rootMargin: "0px" });
        observer.observe(livRef.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingRev(entry.isIntersecting);
        },{ rootMargin: "0px" });
        observer.observe(revRef.current);
        return () => observer.disconnect();
      }, []);
    

    return(
        <>
        <section className='product'>
            <h1 className='product__title'>{'Comment fonctionne votre plateforme digitale?'}</h1>
            <div className='product__container'>
                <div className='product__card'>
                    <h2 className='product__subtitle'>1.Selection</h2>
                    <div className='product__image-content'>
                    <img className='product__image' src={selection} alt='selection'></img>
                    <div className='product__more-description'>{'En savoir plus'}&#8593;</div>
                    <div className={`product__description  ${isIntersectingSel ? 'product__description_hover' : null}`} ref={selRef}>
                    <p>Vous choisissez et sélectionnez seul ou avec un de nos consultants</p>
                    {/* //via WeSafe App */}
                    </div>
                    </div>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle'>2.Commande</h2>
                    <div className='product__image-content'>
                    <img className='product__image' src={commande} alt='commande'></img>
                    <div className='product__more-description'>{'En savoir plus'} &#8593;</div>
                    <div className={`product__description  ${isIntersectingCom ? 'product__description_hover' : null}`} ref={comRef}>
                    <p>Après la réservation, la commande est transmise à l'un de nos fournisseurs</p>
                    </div>
                </div>
                </div>
                <div className='product__card'>
                    <h2 className='product__subtitle product__subtitle_livraison'>3.Livraison et Stockage</h2>
                    <div className='product__image-content'>
                    <img className='product__image' src={livraison} alt='livraison'></img>
                    <div className='product__more-description'>{'En savoir plus'} &#8593;</div>
                    <div className={`product__description  ${isIntersectingLiv ? 'product__description_hover' : null}`} ref={livRef}>
                    <p>La commande est tranportée et livrée par notre fournisseur, puis stockée dans l'un de nos entrepôts ultra-sécurisés</p>
                    </div>
                </div>
                </div>
                {/* <div className='product__card'>
                    <h2 className='product__subtitle'>4.Stockage</h2>
                    <img className='product__image' src={stockage} alt='stockage'></img>
                    <p className='product__subtitle'>
                    La marchandise est stockée dans l'un de nos entrepôts ultra-sécurisés
                    </p>
                </div> */}
                <div className='product__card'>
                    <h2 className='product__subtitle'>4.Revente</h2>
                    <div className='product__image-content'>
                    <img className='product__image' src={revente} alt='stockage'></img>
                    <div className='product__more-description'>{'En savoir plus'} &#8593;</div>
                    <div className={`product__description  ${isIntersectingRev ? 'product__description_hover' : null}`} ref={revRef}>
                    <p>A moyen ou long terme suivant vos objectifs, bénéficier de notre service de revente aupres des épargnants et des professionels</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
