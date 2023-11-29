import { useState, useRef } from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import './price-page-style.css'


const TARIFFS = {
    plan: { name: "PLAN", price: 500 },
    min: { name: "MINIMAL", price: 800 },
    medium: { name: "MINIMAL+", price: 1000 },
    max: { name: "STANDART", price: 1500 }
}

function PricePage() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [selectedArea, setSelectedArea] = useState(100);
    const [selectedTariff, setSelectedTariff] = useState(TARIFFS.plan);

    const selectedTariffRef = useRef<HTMLSelectElement>(null);
    const inputRangeRef = useRef<HTMLInputElement>(null);
    const inputTextRef = useRef<HTMLInputElement>(null);

    function onSwiperTariffClick(tariff: { name: string; price: number; }) {
        setSelectedTariff(tariff)
        if (selectedTariffRef.current)
            selectedTariffRef.current.value = String(tariff.price)
    }

    function onInputRangeChange() {
        setSelectedArea(Number(inputRangeRef.current?.value))
    }

    function onInputTextChange() {
        setSelectedArea(Number(inputTextRef.current?.value))
    }
    
    function onCalculationBtnClick() {
        setFinalPrice(Number(selectedTariffRef.current?.value) * selectedArea)
    }

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Расчет стоимости</h2>
            <p className="price-page-title">Выбор пакета</p>
            <Swiper
                className="price-div-swiper"
                spaceBetween={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className="tariff-slide min-tariff">
                        <p className="tariff-title">{ TARIFFS.plan.name }</p>
                        <ul className="tariff-pluses-list">
                            <li className="tatiff-plus">+ Выезд на замер/помощь в онлайн замере</li>
                            <li className="tatiff-plus">+ Обмерный план</li>
                            <li className="tatiff-plus">+ Планировачное решение</li>
                            <li className="tatiff-plus">+ Корректировки</li>
                        </ul>
                        <div className="tariff-slide-bottom-div">
                            <p className="tariff-price">{ TARIFFS.plan.price } р м²</p>
                            <button 
                                className={ selectedTariff.name === TARIFFS.plan.name ? "choose-tariff-btn-active"  : "choose-tariff-btn" }
                                onClick={ () => onSwiperTariffClick(TARIFFS.plan) }
                                disabled={ selectedTariff.name === TARIFFS.plan.name ? true : false }
                            >
                                { selectedTariff.name === TARIFFS.plan.name ? 'Тариф выбран' : 'Выбрать тариф' }
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="tariff-slide min-tariff">
                        <p className="tariff-title">{ TARIFFS.min.name }</p>
                        <ul className="tariff-pluses-list">
                            <li className="tatiff-plus">+ Выезд на замер/помощь в онлайн замере</li>
                            <li className="tatiff-plus">+ Обмерный план</li>
                            <li className="tatiff-plus">+ Планировачное решение</li>
                            <li className="tatiff-plus">+ Расположение розеток</li>
                            <li className="tatiff-plus">+ Расположение светильников</li>
                            <li className="tatiff-plus">+ Корректировки</li>
                        </ul>
                        <div className="tariff-slide-bottom-div">
                            <p className="tariff-price">{ TARIFFS.min.price } р м²</p>
                            <button 
                                className={ selectedTariff.name === TARIFFS.min.name ? "choose-tariff-btn-active"  : "choose-tariff-btn" }
                                onClick={ () => onSwiperTariffClick(TARIFFS.min) }
                                disabled={ selectedTariff.name === TARIFFS.min.name ? true : false }
                            >
                                { selectedTariff.name === TARIFFS.min.name ? 'Тариф выбран' : 'Выбрать тариф' }
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="tariff-slide medium-tariff">
                        <p className="tariff-title">{ TARIFFS.medium.name }</p>
                        <p className="incoming-tariff">ПАКЕТ { TARIFFS.min.name }</p>
                        <ul className="tariff-pluses-list">
                            <li className="tatiff-plus">+ Развертки стен с размерами</li>
                            <li className="tatiff-plus">+ Продумывание дизайна</li>
                            <li className="tatiff-plus">+ Эскизный коллаж</li>
                            <li className="tatiff-plus">+ 3D Вид планировочного решения</li>
                        </ul>
                        <div className="tariff-slide-bottom-div">
                            <p className="tariff-price">{ TARIFFS.medium.price }р м²</p>
                            <button 
                                className={ selectedTariff.name === TARIFFS.medium.name ? "choose-tariff-btn-active" : "choose-tariff-btn" }
                                onClick={ () => onSwiperTariffClick(TARIFFS.medium) }
                                disabled={ selectedTariff.name === TARIFFS.medium.name ? true : false }
                            >
                                { selectedTariff.name === TARIFFS.medium.name ? 'Тариф выбран' : 'Выбрать тариф' }
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="tariff-slide max-tariff">
                        <p className="tariff-title">{ TARIFFS.max.name }</p>
                        <p className="incoming-tariff">ПАКЕТ { TARIFFS.medium.name }</p>
                        <ul className="tariff-pluses-list">
                            <li className="tatiff-plus">+ Полная проработка дизайн проекта</li>
                            <li className="tatiff-plus">+ Визуализации</li>
                            <li className="tatiff-plus">+ Спецификация</li>
                        </ul>
                        <div className="tariff-slide-bottom-div">
                            <p className="tariff-price">{ TARIFFS.max.price }р м²</p>
                            <button 
                                className={ selectedTariff.name === TARIFFS.max.name ? "choose-tariff-btn-active"  : "choose-tariff-btn" }
                                onClick={ () => onSwiperTariffClick(TARIFFS.max) }
                                disabled={ selectedTariff.name === TARIFFS.max.name ? true : false }
                            >
                                { selectedTariff.name === TARIFFS.max.name ? 'Тариф выбран' : 'Выбрать тариф' }
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <p className="price-page-title">Расчитать стоимость</p>
            <div className="calculation-div">
                <p className="calculation-title">Выбранный тариф</p>
                <select className="calculation-tariff-select" ref={ selectedTariffRef }>
                    <option className="calculation-tariff-select-option" value={ TARIFFS.plan.price }>{ TARIFFS.plan.name }</option>
                    <option className="calculation-tariff-select-option" value={ TARIFFS.min.price }>{ TARIFFS.min.name }</option>
                    <option className="calculation-tariff-select-option" value={ TARIFFS.medium.price }>{ TARIFFS.medium.name }</option>
                    <option className="calculation-tariff-select-option" value={ TARIFFS.max.price }>{ TARIFFS.max.name }</option>
                </select>
                <p className="calculation-title">Площадь помещения</p>
                <input 
                    className="calculation-selected-area-range-input"
                    ref={ inputRangeRef } 
                    type="range" 
                    value={ selectedArea }
                    min={ 10 } 
                    max={ 600 }
                    onInput={ onInputRangeChange }
                />
                <div className="calculation-selected-area">
                    <input
                        className="calculation-selected-area-text-input" 
                        ref={ inputTextRef } 
                        type="text"
                        value={ selectedArea }
                        min={ 10 } 
                        max={ 600 }
                        onInput={ onInputTextChange }
                    />
                    <p>м²</p>
                </div>
                
                <button className="calculation-button" onClick={ onCalculationBtnClick }>Расчитать</button>
                { finalPrice !== 0 && <div className="calculation-final-price">{ finalPrice } p</div> }
            </div>
            <OpenBackFormBtn/>
            <Footer/>
        </div>
    )
}

export default PricePage;
