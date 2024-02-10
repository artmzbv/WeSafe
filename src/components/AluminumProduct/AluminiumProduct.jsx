import "./AluminiumProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'
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
        <div className="aluminium__options">
            {cards.map((card) => (
            <MetalCards card={card}/>
        ))}
        </div>
            <Storage/>
        </section>
        </>
    )
}