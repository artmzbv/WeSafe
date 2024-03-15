import {React, useState, useRef, useEffect}  from "react";
import "./ContactUs.css"
import axios from "axios";


const INPUT = 'INPUT' 
const TEXTAREA = 'TEXTAREA'
const fields = [
    {label: 'Name',
    component: INPUT,
    type: 'text',
    name: 'full_name',
    id: 'full_name'
    },
    {label: 'Surname',
    component: INPUT,
    type: 'text',
    name: 'surname',
    id: 'surname'
    },
    {label: 'Email',
    component: INPUT,
    type: 'email',
    name: 'email',
    id: 'email'
    },
    {label: 'Phone',
    component: INPUT,
    type: 'text',
    name: 'phone',
    id: 'phone'
    },
    {label: 'Message',
    component: TEXTAREA,
    type: 'text',
    name: 'message',
    id: 'message'
    },
]

const Form = () => {

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const reqOptions = {
        method: 'POST',
        body: formData,
    };

    const req = await fetch ("https://wesafe.store/wp-json/contact-form-7/v1/contact-forms/37/feedback", reqOptions)
    const response = await req.json(); 
    
    console.log('response', response)
}
return (
    <form onSubmit={handleSubmit}>
        {fields.map(field => (
            <Fieldset key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                {field.component === INPUT && <Input type={field.type} required={field.required} name={field.name} id={field.id} />}
                {field.component === TEXTAREA && <TextArea required={field.required} name={field.name} id={field.id} />}
            </Fieldset>
        ))}

    </form>
)
}