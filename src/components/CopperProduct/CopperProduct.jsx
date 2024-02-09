import "./CopperProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'

export default function CopperProduct() {
    return(
        <>
        <section className="copper">
        <div className="copper__topic">
                <h1 className="copper__title">Nos produits</h1>
                <h2 className="copper__subtitle">CUIVRE</h2>
        </div>
            {/* Информацию о Copper внутрь карточек  */}
            <MetalCards/>
            <Storage/>
        </section>
        </>
    )
}
