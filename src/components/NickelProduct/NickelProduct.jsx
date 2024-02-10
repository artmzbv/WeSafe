import "./NickelProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'
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
        <div className="nickel__options">
            {cards.map((card) => (
            <MetalCards card={card}/>
        ))}
        </div>
            <Storage/>
        </section>
        </>
    )
}