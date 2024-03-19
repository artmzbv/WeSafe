import './AboutRegulation.css';
import {React, useState, useRef, useEffect}  from "react";
import metal from '../../images/aboutregulation/metal.jpg'
import leaders from '../../images/aboutregulation/leaders.jpg'
import analytics from '../../images/aboutregulation/analytics.jpg'
import transparency from '../../images/aboutregulation/transparency.jpg'
import garanties from '../../images/aboutregulation/garanties.jpg'
import administration from '../../images/aboutregulation/administration.jpg'

export default function AboutRegulation() {
    const [isIntersectingMetals, setIsIntersectingMetals] = useState(false);
    const [isIntersectingPrice, setIsIntersectingPrice] = useState(false);
    const [isIntersectingStock, setIsIntersectingStock] = useState(false);
    const [isIntersectingAnalyse, setIsIntersectingAnalyse] = useState(false);
    const [isIntersectingSecurity, setIsIntersectingSecurity] = useState(false);
    const [isIntersectingAdm, setIsIntersectingAdm] = useState(false);
    // store a reference to a DOM element 

    const metRef = useRef(null);
    const priRef = useRef(null);
    const stoRef = useRef(null);
    const anaRef = useRef(null);
    const secRef = useRef(null);
    const admRef = useRef(null);
    const rootMargin = "-150px"

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingMetals(entry.isIntersecting);
        },{ rootMargin: rootMargin });
        observer.observe(metRef.current);
        return () => observer.disconnect();
      }, []);
    
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingPrice(entry.isIntersecting);
        },{ rootMargin: rootMargin });
        observer.observe(priRef.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingStock(entry.isIntersecting);
        },{ rootMargin: rootMargin });
        observer.observe(stoRef.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingAnalyse(entry.isIntersecting);
        },{ rootMargin: rootMargin });
        observer.observe(anaRef.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingSecurity(entry.isIntersecting);
        },{ rootMargin: rootMargin });
        observer.observe(secRef.current);
        return () => observer.disconnect();
      }, []);
      
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersectingAdm(entry.isIntersecting);
        },{ rootMargin: rootMargin });
        observer.observe(admRef.current);
        return () => observer.disconnect();
      }, []);
    
    return(
        <>
        <section className='regulation'>
            <h1 className='regulation__title'>Épargnez en toute sécurité</h1>
                {/* <h2 className='regulation__subtitle'>Nous travaillons selon ces documents</h2>  */}
                <ul className='regulation__container'>
                    <li className='regulation__item'>
                    <h3 className='regulation__item-title'>Métaux Critiques</h3>
                    <div className='regulation__image-content'>
                        <img className='regulation__image' src={metal} alt='selection'></img> 
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className={`regulation__description  ${isIntersectingMetals ? 'regulation__description_hover' : null}`}  ref={metRef}>
                            <p className='regulation__paragraph'>Tout notre catalogue répond aux normes UE et à la législation sur les Métaux </p>
                            <p className='regulation__paragraph'>Nos produits industriels standards sont enregistrés au LME </p>
                            <p className='regulation__paragraph'>{`Nos produits issus de l'économie circulaire ou de l'industrie de transformation sont conformes 
                                à la législation en vigueur garantie par nos fournisseurs de premier plan`}</p>
                        </div>
                    </div>
                    </li>

                    <li className='regulation__item'>
                        <h3 className='regulation__item-title'>Transparence des Prix</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={transparency} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className={`regulation__description  ${isIntersectingPrice ? 'regulation__description_hover' : null}`} ref={priRef}>
                        <p className='regulation__paragraph'>Nos prix sur les produits industriels standards (hors commissions) sont transparents / LME 
                            (London Metal Exchange, bourse internationale des Métaux) </p>
                        <p className='regulation__paragraph'>Nos prix sur les produits issus de l'économie circulaire ou de l' industrie de transformation 
                            sont transparents sur le marché de gré à gré</p>
                        </div>
                        </div>
                    </li>

                    <li className='regulation__item'>
                    <h3 className='regulation__item-title'>Stockage et Logistique</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={leaders} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className={`regulation__description  ${isIntersectingStock ? 'regulation__description_hover' : null}`} ref={stoRef}>
                        <p className='regulation__paragraph'>Nous travaillons uniquement avec les Leaders du secteur</p>
                        </div>
                        </div>
                    </li>

                    <li className='regulation__item'>
                        <h3 className='regulation__item-title'>Sécurité des vos Paiements</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={garanties} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className={`regulation__description  ${isIntersectingSecurity ? 'regulation__description_hover' : null}`} ref={secRef}>
                        <p className='regulation__paragraph'>Nos partenaires financiers et bancaires garantissent le paiement de vos commandes</p>
                        </div>
                        </div>
                    </li>
                    
                    <li className='regulation__item'>
                    <h3 className='regulation__item-title'>Analyse Marchés des Métaux Critiques</h3>
                    <div className='regulation__image-content'>
                        <img className='regulation__image' src={analytics} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className={`regulation__description  ${isIntersectingAnalyse ? 'regulation__description_hover' : null}`} ref={anaRef}>
                        <p className='regulation__paragraph'>Nos analystes vous transmettent régulièrement des informations macro-économiques du marché national, européen et international des métaux.</p>
                        </div>
                    </div>
                    </li>

                    <li className='regulation__item'>
                        <h3 className='regulation__item-title'>Administratif et Fiscalité</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={administration} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className={`regulation__description  ${isIntersectingAdm ? 'regulation__description_hover' : null}`} ref={admRef}>
                        <p className='regulation__paragraph'>Pour toute question nous vous orienterons (si besoin) vers des partenaires agréés spécialisés 
                            dans le formalisme et les déclarations liés à l'achat de métaux industriels</p>
                        </div>
                        </div>
                    </li>
                </ul>
        </section>
        </>
    )
}
