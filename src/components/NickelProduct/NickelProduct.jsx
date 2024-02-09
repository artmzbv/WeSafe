import "./NickelProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'

export default function NickelProduct() {
    return(
        <>
        <section className="nickel">
        <div className="nickel__topic">
                <h1 className="nickel__title">Nos produits</h1>
                <h2 className="nickel__subtitle">NICKEL</h2>
        </div>
            {/* Информацию о Copper внутрь карточек  */}
            <MetalCards/>
            <Storage/>
        </section>
        </>
    )
}