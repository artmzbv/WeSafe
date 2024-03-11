import {React, useState, useRef, useEffect}  from "react";
import "./ContactUs.css"

export default function ContactUs() {
    const [inputName, setInputName] = useState("");
    const [inputSurname, setInputSurname] = useState("");
    const [inputAdress, setInputAdress] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    const handleInputNameChange = (e) => {
        setInputName(e.target.value)
    }

    const handleInputSurnameChange = (e) => {
        setInputSurname(e.target.value)
    }

    const handleInputAdressChange = (e) => {
        setInputAdress(e.target.value)
    }

    const handleInputPhoneChange = (e) => {
        setInputPhone(e.target.value)
    }

    const handleInputMessageChange = (e) => {
        setInputMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            name: inputName,
            surname: inputSurname,
            adress: inputAdress,
            phone: inputPhone,
            message: inputMessage
        }
        console.log(data)
        
        setInputName("")
        setInputSurname("")
        setInputAdress("")
        setInputPhone("")
        setInputMessage("")
    } 
 
    return(
        <>
        <section className="contact">
        <div className="contact__topic">
            <h1 className="contact__title">Contactez-nous pour prendre des actualites</h1>
        </div>
            <div className="contact__container">  
            <h2 className="contact__text">Si vous-avez des question, envoyez-nous une message par mail a soutien@wesafe.com</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-line">
                <input className="contact__input" placeholder="Prenom" value={inputName} onChange={handleInputNameChange}></input>
                <input className="contact__input" placeholder="Nom" value={inputSurname} onChange={handleInputSurnameChange}></input>
                </div>
                <div className="contact__form-line">
                <input className="contact__input" placeholder="Adresse mail*" required value={inputAdress} onChange={handleInputAdressChange}></input>
                <input className="contact__input" placeholder="Numero de telephone" value={inputPhone} onChange={handleInputPhoneChange}></input>
                </div>
                <textarea className="contact__input-message" placeholder="Message" value={inputMessage} onChange={handleInputMessageChange}></textarea>
                <p className="contact__note">*Note: necessaire a remplir</p>
                <button className="contact__submit" type="submit">Envoyer</button>
            </form>
            </div>
        </section>
        </>
    )
}