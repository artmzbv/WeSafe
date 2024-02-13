import "./NickelProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function NickelProduct() {

    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'nickel'},
        {title:'Cuivre Milberry', link: copperB, name: 'nickel'},
        {title:'Bobine de cuivre', link: copperB, name: 'nickel'},
    ]
    
    return(
        <>
        <section className="nickel">
        <div className="nickel__topic">
                <h1 className="nickel__title">Nos produits</h1>
                <h2 className="nickel__subtitle">NICKEL</h2>
        </div>
        <h3 className='nickel__intro'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
        <p className='nickel__description'>Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala</p>
        <div className="nickel__options">
            {cards.map((card) => (
            <MetalCard card={card}/>
        ))}
        </div>
            <Warehouse/>
        </section>
        </>
    )
}