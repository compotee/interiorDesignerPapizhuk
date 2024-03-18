import { Link } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenPricePageBtn from "../../components/open-price-page-btn/open-price-page-btn";
import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";
import ObjectCard from "../../components/object-card/object-card";
import { OBJECTS } from "../../projects/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import firstStartImg from './img/1.jpg'
import secondStartImg from './img/2.jpg'
import thirdStartImg from './img/3.jpg'
import fourthStartImg from './img/4.jpg'
import fifthStartImg from './img/5.jpg'
import sixthStartImg from './img/6.jpg'
import seventhStartImg from './img/7.jpg'
import eighthStartImg from './img/8.jpg'
import ninthStartImg from './img/9.jpg'
import lenaPhoto from './img/lena-photo.jpg'

import "./home-page-style.css";

function HomePage() {
    function getThreeObjects() {
        const realObjects: { name: string; place: string; square: string; designImg: string[]; realization: boolean; inf: string; mainImg: string; realImg: never[]; }[] = []

        OBJECTS.forEach(object => {
            if (object.realization) realObjects.push(object)
        });

        const threeObjects = realObjects.slice(0, 3);

        return (
            <>
                {
                    threeObjects.map((object) => {
                        if (object.realization) return (<ObjectCard objectCardData={ object }/>);
                    })
                }
            </>
        ) 
    }

    // async function onClick() {
    //     console.log(123)
    //     const client = new MongoClient('mongodb+srv://mp795610:gmlOVusyomVy8MRu@interior-designer-papiz.30xcx9q.mongodb.net/?retryWrites=true&w=majority')
    //     try {
    //         console.log('cskvj')
    //         await client.connect()
    //         console.log('cskvj')
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    return(
        <div className="container">
            {/* <button onClick={onClick} style={{color: "white"}}>vgkuhk</button> */}
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
                            <img className="home-main-img" src={ firstStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ secondStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ thirdStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ fourthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ fifthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ sixthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ seventhStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ eighthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="home-main-img" src={ ninthStartImg } alt="Стартовое изображение"/>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-text-div">
                        <h1 className="swiper-title">Студия дизайна интерьера</h1>
                        <p className="swiper-text">Елены Папижук</p>
                    </div>
                </div>
                <p className="home-text">Мы делаем удобный и уютный интерьер для вашего дома.</p>
                <ul>
                    <li className="home-text">-дизайн интерьера для различных квартир, домов</li>
                    <li className="home-text">-предложения для застройщиков</li>
                    <li className="home-text">-авторский надзор за несколькими объектами</li>
                    <li className="home-text">-поможем найти компромиссы в решении вопросов между всеми членами семьи</li>
                </ul>  
            </div>
            <div className="home-projects-div">
                <h2 className="home-our-projects-title">Наши проекты</h2>
                { getThreeObjects() }
                {/* {
                    OBJECTS.map((object) => {
                        if (object.realization) 
                            return (<ObjectCard objectCardData={ object }/>);
                    })
                } */}
                <Link to={'/design-projects'} className="more-projects-btn">Больше проектов</Link>
            </div>
            <div className="home-about-div">
                <h2 className="home-about-title">Основатель студии</h2>
                <img src={lenaPhoto} className='home-about-img' alt="Фото Елены" />
                <p className="home-about-text">Меня зовут Елена Папижук и эту студию я создавала 3 года. Конечно же все начиналось с обучения и первых проектов. Сейчас мы предоставляем вам профессионализм, широкий выбор услуг и богатый опыт в сфере дизайна интерьера.</p>
            </div>
            <OpenPricePageBtn/>
            <OpenBackFormBtn/>
            <Footer/>
        </div>
    )
}

export default HomePage;