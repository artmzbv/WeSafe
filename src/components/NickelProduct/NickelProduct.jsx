import "./NickelProduct.css"
import Storage from '../Storage/Storage'
import MetalCards from '../MetalCards/MetalCards'

export default function NickelProduct() {
    return(
        <>
        <section>
            <div>NickelProduct</div>
            {/* Информацию о Copper внутрь карточек  */}
            <MetalCards/>
            <Storage/>
        </section>
        </>
    )
}