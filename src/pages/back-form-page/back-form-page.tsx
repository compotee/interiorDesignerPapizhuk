import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import './back-form-page-style.css'

function BackFormPage() {
    return(
        <div className="container">
            <Header/>
            <h2 className="title">Оставить заявку или задать вопрос</h2>
            <form className="back-form">
                <input className="back-form-imput back-form-imput-name" type="text" placeholder="Имя"/>
                <input className="back-form-imput back-form-imput-contact" type="text" placeholder="Email/телефон"/>
                <textarea className="back-form-imput back-form-imput-message" placeholder="Ваше сообщение"/>
                <button className="back-form-send-btn">Отправить</button>
            </form>
            <Footer/>
        </div>
    )
}

export default BackFormPage;