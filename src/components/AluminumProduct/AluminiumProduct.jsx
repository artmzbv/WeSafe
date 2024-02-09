import "./AluminiumProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'

export default function AluminiumProduct() {
    return(
        <>
        <section className="aluminium">
        <div className="aluminium__topic">
                <h1 className="aluminium__title">Nos produits</h1>
                <h2 className="aluminium__subtitle">ALUMINIUM</h2>
        </div>
            {/* Информацию о Copper внутрь карточек  */}
            <MetalCards/>
            <Storage/>
        </section>
        </>
    )
}