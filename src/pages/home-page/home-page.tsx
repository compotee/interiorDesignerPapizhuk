import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";
import { REAL_OBJECTS } from "../../projects/projects";
import ObjectCard from "../../components/object-card/object-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import firstStartImg from './img/start-img-1.png'
import secondStartImg from './img/start-img-2.png'
import thirdStartImg from './img/start-img-3.png'
import fourthStartImg from './img/start-img-4.png'
import fifthStartImg from './img/start-img-5.png'
import arrow from './img/arrow.svg'
import "./home-page-style.css";

function HomePage() {

    return(
        <div className="container">
            <Header/>
            <div className="home-div">
                <div className="swiper-container">
                    <div className="gradiend"></div>
                    <Swiper
                        className="home-div-swiper"
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        loop={true}
                        effect={'fade'}
                    >
                        <SwiperSlide>
                            <img className="home-main-img" src={ thirdStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ firstStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ secondStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ fourthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ fifthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-text-div">
                        <h1 className="swiper-title">Дизайн студия интерьера</h1>
                        <p className="swiper-text">Елены Папижук</p>
                    </div>
                </div>
                <p className="home-text">Мы делаем удобный и уютный интерьер для вашего дома. В бэкграунде у нас такие работы как: дизайн интерьера для различных квартир, домов, а так же есть предложения для застройщиков и авторский надзор за несколькими объектами.</p>
            </div>
            <div className="home-projects-div">
                <h2 className="home-our-projects-title">Наши проекты</h2>
                {
                    REAL_OBJECTS.map((element) => {
                        return (<ObjectCard objectCardData={ element }/>);
                    })
                }
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
            <OpenBackFormBtn/>
            <Footer/>
        </div>
    )
}

export default HomePage;