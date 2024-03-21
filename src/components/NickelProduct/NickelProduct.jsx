import "./NickelProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'
import nickelFull from '../../images/aboutmetals/nickel-full.jpeg'
import {Helmet} from 'react-helmet-async'

export default function NickelProduct() {

    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'nickel'},
        {title:'Cuivre Milberry', link: copperB, name: 'nickel'},
        {title:'Bobine de cuivre', link: copperB, name: 'nickel'},
    ]
    
    return(
        <>
        <Helmet>
            <title>Nickel</title>
            <meta name="description" content="L'achat de Nickel sera disponible à partir de l'été 2024"></meta>
        </Helmet>
        <section className="nickel">
        <div className="nickel__topic">
                <h1 className="nickel__title">{`L'achat de Nickel sera disponible\nà partir de l'été 2024`}</h1>
                <img className="nickel__image" src={nickelFull} alt="cobalt" />
                {/* <h2 className="nickel__subtitle">NICKEL</h2> */}
        </div>
        {/* <h3 className='nickel__intro'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
        <p className='nickel__description'>Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala</p>
        <div className="nickel__container">
            {cards.map((card) => (
            <MetalCard key={card.title} card={card}/>
        ))}
        </div>
            <Warehouse/> */}
        </section>
        </>
    )
}