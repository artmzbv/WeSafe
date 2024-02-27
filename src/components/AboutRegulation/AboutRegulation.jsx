import './AboutRegulation.css';
import selection from '../../images/selection.jpg'

export default function AboutRegulation() {
    return(
        <>
        <section className='regulation'>
            <h1 className='regulation__title'>Epargnez en toute securite</h1>
                {/* <h2 className='regulation__subtitle'>Nous travaillons selon ces documents</h2>  */}
                <ul className='regulation__container'>
                    <li className='regulation__item'>
                    <h3 className='regulation__item-title'>Metaux Critiques</h3>
                    <div className='regulation__image-content'>
                        <img className='regulation__image' src={selection} alt='selection'></img> 
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className='regulation__description'>
                            <p className='regulation__paragraph'>Tout notre catalogue répond aux normes UE et à la législation sur les Métaux </p>
                            <p>Nos produits industriels standards sont enregistrés au LME </p>
                            <p>Nos produits issus de l économie circulaire ou de l industrie de transformation sont conformes 
                                à la législation en vigueur garantie par nos fournisseurs de premiers plan</p>
                        </div>
                    </div>
                    </li>

                    <li className='regulation__item'>
                        <h3 className='regulation__item-title'>Prix</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={selection} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className='regulation__description'>
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
                        <img className='regulation__image' src={selection} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className='regulation__description'>
                        <p className='regulation__paragraph'>Nous travaillons uniquement avec des Leader du secteur</p>
                        </div>
                        </div>
                    </li>
                    
                    <li className='regulation__item'>
                    <h3 className='regulation__item-title'>Analyse Marches des Metaux Critiques</h3>
                    <div className='regulation__image-content'>
                        <img className='regulation__image' src={selection} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className='regulation__description'>
                        <p className='regulation__paragraph'>Nos analystes vous informe régulièrement des informations macro économiques du marché national, européens et internationaux des métaux.</p>
                        </div>
                    </div>
                    </li>

                    <li className='regulation__item'>
                        <h3 className='regulation__item-title'>Securite des vos paiements</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={selection} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className='regulation__description'>
                        <p className='regulation__paragraph'>Nos partenaires financiers et bancaires garantissent le paiement de vos commandes</p>
                        </div>
                        </div>
                    </li>

                    <li className='regulation__item'>
                        <h3 className='regulation__item-title'>Aministratif et Fiscalite</h3>
                        <div className='regulation__image-content'>
                        <img className='regulation__image' src={selection} alt='selection'></img>
                        <div className='regulation__more-description'>{'En savoir plus'} &#8593;</div>
                        <div className='regulation__description'>
                        <p className='regulation__paragraph'>Pour toute question nous vous orienterons (si besoin) vers des partenaires agréés spécialisés 
                            dans le formalisme et les déclarations liés à l' achat de Métaux Industriels</p>
                        </div>
                        </div>
                    </li>
                </ul>
        </section>
        </>
    )
}
