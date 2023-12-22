import { useRef } from "react";
import axios from "axios";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import './back-form-page-style.css'

function BackFormPage() {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputContactRef = useRef<HTMLInputElement>(null);
    const inputMessageRef = useRef<HTMLTextAreaElement>(null);

    function onSendBtnClick() {
        const inputName = inputNameRef.current;
        const inputContact = inputContactRef.current;
        const inputMessage = inputMessageRef.current;

        if (inputName?.value === '') {
            inputName!.style.outline = '1px solid red';
        } else {
            inputName!.style.outline = 'none';
        }
        if (inputContact?.value === '') {
            inputContact!.style.outline = '1px solid red';
        } else {
            inputContact!.style.outline = 'none';
        }
        if (inputMessage?.value === '') {
            inputMessage!.style.outline = '1px solid red';
        } else {
            inputMessage!.style.outline = 'none';
        }

        if (inputNameRef.current?.value === '' && inputContactRef.current?.value === '' && inputMessageRef.current?.value === '') {
            const token = "6919275116:AAGXuMO9DSm17HKXOXrhmThqhRhdLKcO-iI";
            const chat_id = "-4025228245";

            let message = `Имя: ${ inputName?.value }\n`;
            message += `Контакт связи: ${ inputContact?.value }\n`;
            message += `Сообщение: ${ inputMessage?.value }`;

            axios.post(`https://api.telegram.org/bot${token }/sendMessage`, {
                chat_id: chat_id,
                parse_mode: 'html',
                text: message
            })
        }
    }

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Оставить заявку или задать вопрос</h2>
            <form className="back-form">
                <input 
                    ref={ inputNameRef }
                    className="back-form-input back-form-input-name"
                    type="text" 
                    name="name"
                    placeholder="Имя"
                    required
                />
                <input 
                    ref={ inputContactRef } 
                    className="back-form-input back-form-input-contact" 
                    type="text" 
                    name="contact"
                    placeholder="Email/телефон"
                    required
                />
                <textarea 
                    ref={ inputMessageRef } 
                    className="back-form-input back-form-input-message" 
                    name="message"
                    placeholder="Ваше сообщение"
                    required
                />
                <button
                    type="submit"
                    onClick={ onSendBtnClick } 
                    className="back-form-send-btn">
                        Отправить
                </button>
            </form>
            <Footer/>
        </div>
    )
}

export default BackFormPage;