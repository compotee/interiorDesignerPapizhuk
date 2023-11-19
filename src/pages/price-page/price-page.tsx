import { useState, useRef } from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import './price-page-style.css'

function PricePage() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [selectedArea, setSelectedArea] = useState(10);

    const selectedTariffRef = useRef<HTMLSelectElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function onCalculationBtnClick() {
        setFinalPrice(Number(selectedTariffRef.current?.value) * selectedArea)
    }

    function onInputChange() {
        setSelectedArea(Number(inputRef.current?.value))
    }

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Расчет стоимости</h2>
            <p className="price-page-title">Выбор пакета</p>
            <div>

            </div>
            <p className="price-page-title">Расчитать стоимость</p>
            <div className="calculation-div">
                <p className="calculation-title">Выбранный тариф</p>
                <select className="calculation-tariff-select" ref={ selectedTariffRef }>
                    <option className="calculation-tariff-select-option" value={ 800 }>Минимальный</option>
                    <option className="calculation-tariff-select-option" value={ 1000 }>Стандарт</option>
                    <option className="calculation-tariff-select-option" value={ 1500 }>Премиум</option>
                </select>
                <p className="calculation-title">Площадь помещения</p>
                <input 
                    className="alculation-selected-area-input"
                    ref={ inputRef } 
                    type="range" 
                    value={ selectedArea }
                    min={ 1 } 
                    max={ 100 }
                    onInput={ onInputChange }
                />
                <div className="calculation-selected-area">{ selectedArea }</div>
                <button className="calculation-button" onClick={ onCalculationBtnClick }>Расчитать</button>
                <div className="calculation-final-price" style={ finalPrice !== 0 ? { visibility: 'visible' } : { visibility: 'hidden' } }>
                    { finalPrice } p
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default PricePage;
