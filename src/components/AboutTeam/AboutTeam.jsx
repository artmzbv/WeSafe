import './AboutTeam.css';
import christophe from '../../images/aboutteam/photo_christophe.jpg'
import jerome from '../../images/aboutteam/photo_jerome.png'

export default function AboutTeam() {
    return(
        <>
        <section className='team'>
            <h1 className='team__title'>Qui sommes-nous?</h1>
            <div className='team__container'>
            <div className='team__card'>
                <img className='team__photo' src={jerome} alt="Jerome Thomasse"/>
                <h2 className='team__name'>Jerome Thomasse</h2>
                <p className='team__profession'>CEO</p>
                <p className='team__description'>
                {'Specialiste de la Gestion de Patrimoine et de l Epargne depuis 30 ans'}
                </p>
            </div>
            <div className='team__card'>
                <img className='team__photo' src={christophe} alt="Christophe Roy"/>
                <h2 className='team__name'>Christophe Roy</h2>
                <p className='team__profession'>CMO</p>
                <p className='team__description'>
                {'Gestionnaire de Projet / Specialiste Marketing/ Conseiller Financier'}
                </p>
            </div>
            <div className='team__card'>
                <img className='team__photo' src={christophe} alt="Artem Zubov"/>
                <h2 className='team__name'>Artem Zubov</h2>
                <p className='team__profession'>CTO</p>
                <p className='team__description'>
                {'Développeur Web, Analyste Macro & Commodities'}
                </p>
            </div>
            </div>
        </section>
        </>
    )
}
