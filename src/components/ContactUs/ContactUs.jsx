import {React, useState, useRef, useEffect}  from "react";
import "./ContactUs.css"
// import axios from "axios";

export default function ContactUs() {
    const defaultData = {
        "name":"",
        "surname":"",
        "email":"",
        "phone":"",
        "message":"",
        // "_wpcf7_unit_tag": "8b9d7fa",
    }
    const [data, setData] = useState(defaultData)
    const [clientMessage, setClientMessage] = useState(null)

    const formRef = useRef(null);

    const handleData = (e) => {
        const inputData={...data}
        inputData[e.target.id] = e.target.value
        setData(inputData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
          
        const formdata = new FormData();
                formdata.append("your-name", data.name);
                formdata.append("your-surname", data.surname);
                formdata.append("your-email", data.email);
                formdata.append("your-subject", "Formulaire de contact");
                formdata.append("your-phone", data.phone);
                formdata.append("your-message", data.message);
                formdata.append("your-message", data.message);
                formdata.append("_wpcf7_unit_tag", "8b9d7fa");

                setData(defaultData)
                const requestOptions = {
                method: "POST",
                // headers: {
                //     "Content-Type": "multipart/form-data",
                //   },
                body: formdata,
                // redirect: "follow"
            };
            const resultDisplay = (res) => {
                console.log(res)
                setClientMessage(JSON.parse(res))
            } 

        fetch("https://wesafe.store/wp-json/contact-form-7/v1/contact-forms/37/feedback", requestOptions)
                .then((response) => response.text())
                .then((result) => resultDisplay(result))
                // .then((result) => console.log(result))
                // .then((result) => setClientMessage(result))
                .catch((error) => console.error(error)) 
                
                // setClientMessage(result)
                
                setData(defaultData)

                formdata.delete("your-name", data.name);
                formdata.delete("your-surname", data.surname);
                formdata.delete("your-email", data.email);
                formdata.delete("your-phone", data.phone);
                formdata.delete("your-message", data.message);
                console.log(clientMessage)
        }

        function handleClosePopup() {
            setClientMessage(null);
        }
        useEffect(() => {
            function onKeyup(e) {
              //define event listener
              if (e.key === 'Escape')
               handleClosePopup()
            }
              //register our listener
            window.addEventListener('keyup', onKeyup);
              //unregister our listener
            return () => window.removeEventListener('keyup', onKeyup);
          }, []);
    
    
 
    return(
        <>
        <section className="contact">
        <div className="contact__topic">
            <h1 className="contact__title">Contactez-nous pour prendre des actualites</h1>
        </div>
            <div className="contact__container">  
            <h2 className="contact__text">Si vous-avez des question, envoyez-nous une message par mail a contact@wesafe.store</h2>
            <form className="contact__form" onSubmit={(e) => handleSubmit(e)}>
                <div className="contact__form-line">
                <input type="text" name="your-name" id="name"  className="contact__input" placeholder="Prenom" value={data.name} onChange={(e) => handleData(e)}></input>
                <input type="text" name="your-surname" id="surname" className="contact__input" placeholder="Nom" value={data.surname} onChange={(e) => handleData(e)}></input>
                </div>
                <div className="contact__form-line">
                <input type="email" name="your-surname" id="email" className="contact__input" placeholder="Adresse mail*" value={data.email} onChange={(e) => handleData(e)}></input>
                <input  type="text" name="your-surname" id="phone" className="contact__input" placeholder="Numero de telephone" value={data.phone} onChange={(e) => handleData(e)}></input>
                </div>
                <textarea id="message" name="your-message" className="contact__input-message" placeholder="Message" value={data.message} onChange={(e) => handleData(e)}></textarea>
                <p type="text" className="contact__note">*Note: necessaire a remplir</p>
                <button className="contact__submit" type="submit">Envoyer</button>
                {clientMessage === null ? 
                null :
                <div className="contact__popup"  onClick={handleClosePopup}>{clientMessage.message}</div> }
            </form>
            </div>
        </section>
        </>
    )
}