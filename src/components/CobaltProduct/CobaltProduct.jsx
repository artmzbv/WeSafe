import "./CobaltProduct.css"
import Warehouse from '../Warehouse/Warehouse'
import MetalCard from '../MetalCard/MetalCard'
import copperA from '../../images/offer_copper.jpg'
import copperB from '../../images/offer_copper.jpg'
import cobalt from '../../images/aboutmetals/cobalt.jpg'

export default function CobaltProduct() {

    const cards = [
        {title:'Cathodes de cuivre grade A', link: copperA, name: 'copper'},
        {title:'Cuivre Milberry', link: copperB, name: 'copper'},
        {title:'Bobine de cuivre', link: copperB, name: 'copper'},
    ]

    return(
        <>
        <section className="cobalt">
        <div className="cobalt__topic">
                <h1 className="cobalt__title">{`L'achat de Cobalt sera disponible\nà partir de l'automne 2024`}</h1>
                <img className="cobalt__image" src={cobalt} alt="cobalt" />
                {/* <h2 className="cobalt__subtitle">COBALT</h2> */}
        </div>
        {/* <h3 className='cobalt__intro'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
        <p className='cobalt__description'>Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala 
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala
        Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala Notre offre est lalalala</p>
        <div className="cobalt__container">
            {cards.map((card) => (
            <MetalCard key={card.title} card={card}/>
        ))}
        </div>
            <Warehouse/> */}
        </section>
        </>
    )
}