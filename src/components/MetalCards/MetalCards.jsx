import "./MetalCards.css"

export default function MetalCards({card}) {
    return(
        <>
        <section className="types">
            <h1 className="types__name">{card.title}</h1>
            <img 
            className="types__images"
            src={card.link}
            alt={card.name}/>
        </section>
        </>
    )
}