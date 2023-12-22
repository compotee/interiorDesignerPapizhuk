import { useRef } from "react";

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
    }

    // const isSend = inputNameRef.current?.value === '' || inputContactRef.current?.value === '' || inputMessageRef.current?.value === '' ;

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Оставить заявку или задать вопрос</h2>
            <form className="back-form" method="POST" action="telegramm.php" >
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
                    // disabled={ isSend }
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