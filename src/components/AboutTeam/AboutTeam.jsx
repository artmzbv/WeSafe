import './AboutTeam.css';
import christophe from '../../images/photo_christophe.jpg'
import jerome from '../../images/photo_jerome.png'

export default function AboutTeam() {
    return(
        <>
        <section className='team'>
            <h1 className='team__title'>Qui sommes-nous?</h1>
            <div className='team__container'>
            <div className='team__card'>
                <img className='team__photo' src={jerome} alt="Jerome Thomasse"/>
                <h2 className='team__name'>Jerome Thomasse</h2>
                <p className='team__description'>
                lalalalalalaalallalalalalalaalallalalalalalaalallalalalalalaalallalalaalallalalalalalaalal
                </p>
            </div>
            <div className='team__card'>
                <img className='team__photo' src={christophe} alt="Christophe Roy"/>
                <h2 className='team__name'>Christophe Roy</h2>
                <p className='team__description'>
                lalalalalalaalallalalalalalaalallalalalalalaalallalalalalalaalallalalaalallalalalalalaalal
                </p>
            </div>
            <div className='team__card'>
                <img className='team__photo' src={christophe} alt="Artem Zubov"/>
                <h2 className='team__name'>Artem Zubov</h2>
                <p className='team__description'>
                    lalalalalalaalallalalalalalaalallalalalalalaalallalalalalalaalallalalaalallalalalalalaalal
                </p>
            </div>
            </div>
        </section>
        </>
    )
}
