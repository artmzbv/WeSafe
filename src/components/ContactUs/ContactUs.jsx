import "./ContactUs.css"

export default function ContactUs() {
    return(
        <>
        <section className="contact">
        <div className="contact__topic">
            <h1 className="contact__title">Contactez-nous pour prendre des actualites</h1>
        </div>
            <div className="contact__container">  
            <h2 className="contact__text">Si vous-avez des question, envoyez-nous une message par mail a soutien@wesafe.com</h2>
            <form className="contact__form">
                <div className="contact__form-line">
                <input className="contact__input" placeholder="Prenom"></input>
                <input className="contact__input" placeholder="Nom"></input>
                </div>
                <div className="contact__form-line">
                <input className="contact__input" placeholder="Adresse mail"></input>
                <input className="contact__input" placeholder="Numero de telephone"></input>
                </div>
                <input className="contact__input-message" placeholder="Message"></input>
            </form>
            </div>
        </section>
        </>
    )
}