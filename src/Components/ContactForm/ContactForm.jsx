import './ContactForm.css';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
function ContactForm() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const [mailValue, setMailValue] = useState("")
    const [titleValue, setTitleValue] = useState("")
    const [messageValue, setMessageValue] = useState("")

    const form = useRef()
    function checkEmail(email){
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    function verifyData(event){
        event.preventDefault();
        if(!checkEmail(mailValue)){
            setError(true)
            setErrorMessage("błędny email")
            return;
        }
        else if(titleValue.length < 5){
            setError(true)
            setErrorMessage("tytuł powinien mieć przynajmniej 5 znaków")
            return;
        }
        else if(messageValue.length < 10){
            setError(true)
            setErrorMessage("wiadomość powinna mieć przynajmniej 10 znaków")
            return;
        }

        sendMail();
    }
    function sendMail(){
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then((result) => {
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2000)
            }, (error) => {
                setError(true)
                setErrorMessage("Nie udało się wysłać wiadomości")
                setTimeout(() => setError(false), 2000)
            });

    }

    return (
        <form ref={form} onSubmit={verifyData}>
            <h1>Wyślij mi wiadomość</h1>
            {success &&
                <div className="successBox">pomyślnie wysłano wiadomość</div>
            }
            {error &&
                <div className="errorBox">{errorMessage}</div>
            }
            <input id="emailInput"
                   type="email"
                   placeholder="mail"
                   onChange={(e) => setMailValue(e.target.value)}
                   name="email"
            />
            <input id="titleInput"
                   type="text"
                   placeholder="tytuł"
                   onChange={(e) => setTitleValue(e.target.value)}
                   name="title"
            />
            <textarea id="messageInput"
                      rows="10"
                      cols="50"
                      minLength="10"
                      maxLength="200"
                      placeholder="wiadomość"
                      onChange={(e) => setMessageValue(e.target.value)}
                      name="message"
            />
            <button>Wyślij</button>
        </form>
    );
}

export default ContactForm;
