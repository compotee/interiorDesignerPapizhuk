import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "./img/logo-3.svg";
import "./header-style.css";

function Header() {
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();
      
    function OpenMenuBtnClick() {
        if (isActive) {
            setActive(false);
            window.onscroll = () => { '' };
        } else {
            setActive(true);
            window.onscroll = () => { window.scroll(0, 0); };
        }
    }

    function onClickHandler(link: string) {
        setActive(false);
        window.onscroll = () => { '' };
        navigate(link);
    }

    return (
        <div className="header-container">
            <div className="header-container-title">
                <img className="header-logo" src={ logo } alt='Логотип'/>
                <button className='hamburger-lines' onClick={ OpenMenuBtnClick }>
                    <span className={isActive ? 'line line1' : 'line'}></span>
                    <span className={isActive ? 'line line2' : 'line'}></span>
                    <span className={isActive ? 'line line3' : 'line'}></span>
                </button>
            </div>
            <ul className="menu-modal-container" style={ isActive ? { visibility: 'visible' } : { visibility: 'hidden' } }>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/") }>
                            Главная
                    </button>
                </li>
                <li className="title-menu-modal">Услуги</li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/services-design") }>
                            Дизайн проект
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/services-supervision") }>
                            Авторский надзор
                    </button>
                </li>
                <li className="title-menu-modal">Портфолио</li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/design-projects") }>
                            Дизайн проекты
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/real-objects") }>
                            Реализованные объекты
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal"
                        onClick={() => onClickHandler("/price") }>
                            Рассчитать стоимость проекта
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/back-form") }>
                            Контакты
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Header;