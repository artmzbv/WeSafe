import "./AluminiumProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'

export default function AluminiumProduct() {

    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'copper'},
        {title:'Cuivre Milberry', link: copperB, name: 'copper'},
        {title:'Bobine de cuivre', link: copperB, name: 'copper'},
    ]

    return(
        <>
        <section className="aluminium">
        <div className="aluminium__topic">
                <h1 className="aluminium__title">Nos produits</h1>
                <h2 className="aluminium__subtitle">ALUMINIUM</h2>
        </div>
        <h3 className='aluminium__intro'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
        <p className='aluminium__description'>Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala</p>
        <div className="aluminium__container">
            {cards.map((card) => (
            <MetalCard card={card}/>
        ))}
        </div>
            <Warehouse/>
        </section>
        </>
    )
}