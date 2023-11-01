import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import OpenMoreProjectsBtn from "../../components/open-more-projects-btn/open-more-projects-btn";
// import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";
// import OpenChoosePriceBtn from "../../components/open-choose-price/open-choose-price";

import startImg from './img/start-img.png'
import arrow from './img/arrow.svg'
import "./home-page-style.css";

function HomePage() {

    return(
        <div className="container">
            <Header/>
            <div className="home-div">
                <img className="home-main-img" src={ startImg } alt="Стартовое изображение"/>
                <h1 className="home-title">Дизайн студия интерьера</h1>
                <p className="home-text">Мы делаем удобный и уютный интерьер для вашего дома. В бэкграунде у нас такие работы как: дизайн интерьера для различных квартир, домов, а так же есть предложения для застройщиков и авторский надзор за несколькими объектами.</p>
            </div>
            <div className="home-projects-div">
                <h2 className="home-our-projects-title">Наши проекты</h2>
                <Link to={'/design-projects'} className="more-projects-btn">Больше проектов </Link>
            </div>
            <div className="home-about-div">
                <h2 className="home-about-title">Основатель студии</h2>
                <div className="home-about-text-div">
                    <p className="home-about-text">Меня зовут Елена Папижук и эту студию я создавала 3 года. Конечно же все начиналось с обучения и первых проектов. Сейчас мы предоставляем вам профессионализм, широкий выбор услуг и богатый опыт в сфере дизайна интерьера.</p>
                </div>
            </div>
            <Link to={ "/price" } className="price-link">
                <p className="price-link-text">Рассчет стоимости вашего заказа</p> 
                <img src={ arrow } alt="Стрелка" />
            </Link>
            <Link to={ "/back-form" } className="back-form-link">
                <p className="back-form-link-text">Оставить заявку</p>
                <img src={ arrow } alt="Стрелка" />
            </Link>
            {/* <OpenChoosePriceBtn/> */}
            {/* <OpenBackFormBtn/> */}
            <Footer/>
        </div>
    )
}

export default HomePage;