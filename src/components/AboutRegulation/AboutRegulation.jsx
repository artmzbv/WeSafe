import './AboutRegulation.css';

export default function AboutRegulation() {
    return(
        <>
        <section className='regulation'>
            <h1 className='regulation__title'>Epargnez en toute securite</h1>
            <div className='regulation__container'>
                <h2 className='regulation__subtitle'>Nous travaillons selon ces documents</h2> 
                <ul className='regulation__list'>
                    <li className='regulation__item'>Metaux Critiques</li>
                    <li className='regulation__item'>Prix</li>
                    <li className='regulation__item'>Stockage et Logistique</li>
                    <li className='regulation__item'>Analyse Marches des Metaux Critiques</li>
                    <li className='regulation__item'>Securite des vos paiements</li>
                    <li className='regulation__item'>Aministratif et Fiscalite</li>
                </ul>
            </div>
        </section>
        </>
    )
}
