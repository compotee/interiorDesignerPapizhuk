import { useNavigate } from "react-router-dom";
import { useState } from "react";

import OpenMenuBtn from "../open-menu-btn/open-menu-btn";
// import MenuModal from "../menu-modal/menu-modal";

import logo from "./img/logo.png";
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
                <OpenMenuBtn onOpenMenuBtnClick={ OpenMenuBtnClick } isActive={ isActive }/>
            </div>
            {/* <MenuModal/> */}
            <ul className="menu-modal-container" style={ isActive ? { visibility: 'visible' } : { visibility: 'hidden' } }>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/") }>Главная</button>
                </li>
                <li className="title-menu-modal">Услуги</li>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/services-design") }>Дизайн проект</button>
                </li>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/services-supervision") }>Авторский надзор</button>
                </li>
                <li className="title-menu-modal">Портфолио</li>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/design-projects") }>Дизайн проекты</button>
                </li>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/real-objects") }>Реализованные объекты</button>
                </li>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/price") }>Рассчитать стоимость проекта</button>
                </li>
                <li>
                    <button className="link-menu-modal" onClick={() => onClickHandler("/back-form") }>Контакты</button>
                </li>
            </ul>
        </div>
    )
}

export default Header;