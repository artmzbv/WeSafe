import "./Warehouse.css"

export default function Warehouse() {
    return(
        <>
        <section className="warehouse">
            <h3 className='warehouse__title'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
            <p className='warehouse__description'>Nos entrepôts n'ont pas toutes les mêmes caractéristiques. Seul l'entrepôt de Paris est pour l'instant en capacité de recevoir toutes les marchandises. Mais pour une diminution des coûts, vous pouvez opter pour un stockage dans plusieurs sites.
Nos conseillers sont à votre disposition pour vous expliquer les modalités de stockages et les coûts afférents.
            </p>
            <div className="warehouse__photo"></div>
        </section>
        </>
    )
}