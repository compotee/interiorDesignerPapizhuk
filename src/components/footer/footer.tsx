import { Link } from "react-router-dom";

import whatsAppLogo from './img/whatsapp-svgrepo-com.svg';
import tgLogo from './img/telegram-svgrepo-com.svg';
import instLogo from './img/instagram-svgrepo-com.svg';
import vkLogo from "./img/vk-svgrepo-com.svg";
import "./footer-style.css";

function Footer() {
    return (
        <div className="footer-container">
            <p>Контакты</p>
            <a href="tel:+79156414442">+ 7 915 641 44 42</a>
            <div className="footer-links-container">
                <Link to={'https://vk.com/papizuk_design'} className="footer-link">
                    <img src={ whatsAppLogo } alt="Логотип ВК"/>
                </Link>
                <Link to={'https://vk.com/papizuk_design'} className="footer-link">
                    <img src={ tgLogo } alt="Логотип ВК"/>
                </Link>
                <Link to={'https://vk.com/papizuk_design'} className="footer-link">
                    <img src={ instLogo } alt="Логотип ВК"/>
                </Link>
                <Link to={'https://vk.com/papizuk_design'} className="footer-link">
                    <img src={ vkLogo } alt="Логотип ВК"/>
                </Link>
            </div>
        </div>
    )
}

export default Footer;