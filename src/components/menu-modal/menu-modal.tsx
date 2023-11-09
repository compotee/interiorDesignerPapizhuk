import { Link } from "react-router-dom";

import "./menu-modal-style.css";

function MenuModal() {
    return (
        <div className="menu-modal-container">
            <Link to={"/"}>Главная</Link>
            <p>Услуги</p>
            <Link to={"/"}>Дизайн проект</Link>
            <Link to={"/"}>Авторский надзор</Link>
            <p>Портфолио</p>
            <Link to={"/"}>Дизайн проекты</Link>
            <Link to={"/"}>Реализованные объекты</Link>
            <Link to={"/"}>Рассчитать стоимость проекта</Link>
            <Link to={"/"}>Контакты</Link>
        </div>
    )
}

export default MenuModal;