import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenMoreProjectsBtn from "../../components/open-more-projects-btn/open-more-projects-btn";
// import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";
import OpenChoosePriceBtn from "../../components/open-choose-price/open-choose-price";

import startImg from './img/start-img.png'
import lenaPhoto from './img/lena-photo.png'
import "./home-page-style.css";

function HomePage() {

    return(
        <div className="container">
            <Header/>
            {/* <Link to={ "/price" }>Прайс</Link> */}
            <div>
                <img src={ startImg } alt="Стартовое изображение"/>
                <p>Дизайн студия интерьера</p>
                <p>Мы делаем удобный и уютный интерьер для вашего дома. В бэкграунде у нас такие работы как: дизайн интерьера для различных квартир, домов, а так же есть предложения для застройщиков и авторский надзор за несколькими объектами.</p>
            </div>
            <div>
                <p>Наши проекты</p>
                <OpenMoreProjectsBtn/>
            </div>
            <div>
                <p>Основатель студии</p>
                <p>Меня зовут Елена Папижук и эту студию я создавала 3 года. Конечно же все начиналось с обучения и первых проектов. Сейчас мы предоставляем вам профессионализм, широкий выбор услуг и богатый опыт в сфере дизайна интерьера.</p>
                <img src={ lenaPhoto } alt="Фотография Елены" />
            </div>
            <OpenChoosePriceBtn/>
            {/* <OpenBackFormBtn/> */}
            <Link to={ "/form" } className="back-form-link">Оставить заявку</Link>
            <Footer/>
        </div>
    )
}

export default HomePage;