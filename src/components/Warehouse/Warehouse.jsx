import "./Warehouse.css"

export default function Warehouse() {
    return(
        <>
        <section className="warehouse">
            <h3 className='warehouse__title'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
            <p className='warehouse__description'>Nos entrepôts n'ont pas toutes les mêmes caractéristiques. Seul l'entrepôt de Paris est pour l'instant en capacité de recevoir toutes les marchandises. Mais pour une diminution des coûts, vous pouvez opter pour un stockage dans plusieurs sites.
Nos conseillers sont à votre disposition pour vous expliquer les modalités de stockages et les coûts afférents.
            </p>
            {/* <div className="warehouse__photo"></div> */}
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5530596.398493016!2d7.243164062500032!3d47.40245070293584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1710358256584!5m2!1sru!2sru" 
            width="80%"
            height="600" 
            className="warehouse__map"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
        </>
    )
}