import {React, useState, useRef, useEffect}  from "react";
import "./ContactUs.css"
import axios from "axios";

export default function ContactUs() {
    const defaultData = {
        "your-name":"",
        "your-surname":"",
        "your-adress":"",
        "your-phone":"",
        "your-message":"",
        _wpcf7_unit_tag: "8b9d7fa",
    }
    const [data, setData] = useState(defaultData)

    const handleData = (e) => {
        const inputData={...data}
        inputData[e.target.id] = e.target.value
        setData(inputData)
    }
    
    const url = "https://wesafe.store/wp-json/contact-form-7/v1/contact-forms/37" 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://wesafe.store/wp-json/contact-form-7/v1/contact-forms/37" ,{
            "your-name": data.name,
            "your-surname": data.surname,
            "your-adress": data.adress,
            "your-phone": data.phone,
            "your-message": data.message,
            _wpcf7_unit_tag: "8b9d7fa",
            // validation_error: false,
            // validation_message: '',
        }).then(res =>{
            console.log(res.data)
        })

        setData(defaultData)
    }

 
    return(
        <>
        <section className="contact">
        <div className="contact__topic">
            <h1 className="contact__title">Contactez-nous pour prendre des actualites</h1>
        </div>
            <div className="contact__container">  
            <h2 className="contact__text">Si vous-avez des question, envoyez-nous une message par mail a soutien@wesafe.com</h2>
            <form className="contact__form" onSubmit={(e) => handleSubmit(e)}>
                <div className="contact__form-line">
                <input id="name"  className="contact__input" placeholder="Prenom" value={data.name} onChange={(e) => handleData(e)}></input>
                <input id="surname" className="contact__input" placeholder="Nom" value={data.surname} onChange={(e) => handleData(e)}></input>
                </div>
                <div className="contact__form-line">
                <input id="adress" className="contact__input" placeholder="Adresse mail*" required value={data.adress} onChange={(e) => handleData(e)}></input>
                <input id="phone" className="contact__input" placeholder="Numero de telephone" value={data.phone} onChange={(e) => handleData(e)}></input>
                </div>
                <textarea id="message" className="contact__input-message" placeholder="Message" value={data.message} onChange={(e) => handleData(e)}></textarea>
                <p className="contact__note">*Note: necessaire a remplir</p>
                <button className="contact__submit" type="submit">Envoyer</button>
            </form>
            </div>
        </section>
        </>
    )
}