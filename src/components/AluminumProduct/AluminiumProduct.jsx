import "./AluminiumProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'

export default function AluminiumProduct() {
    return(
        <>
        <section>
            <div>AlluminiumProduct</div>
            {/* Информацию о Copper внутрь карточек  */}
            <MetalCards/>
            <Storage/>
        </section>
        </>
    )
}