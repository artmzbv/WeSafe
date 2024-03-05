import './AboutTeam.css';
import christophe from '../../images/aboutteam/photo_christophe.jpg'
import jerome from '../../images/aboutteam/photo_jerome.png'
import {team} from '../../utils/utils'

export default function AboutTeam() {
    return(
        <>
        <section className='team'>
            <h1 className='team__title'>Qui sommes-nous?</h1>
            <div className='team__container'>
            {team.map((person) => 
            <div className='team__card'>
            <img className='team__photo' src={person.src} alt={person.name}/>
            <h2 className='team__name'>{person.name}</h2>
            <p className='team__profession'>{person.profession}</p>
            <p className='team__description'>
            {person.description}
            </p>
        </div>
                )}
            </div>
        </section>
        </>
    )
}
