import OpenMenuBtn from "../open-menu-btn/open-menu-btn";

import logo from "./img/logo.png";
import "./header-style.css";

function Header() {
    return (
        <div className="header-container">
            <img src={ logo } alt='Логотип'/>
            <OpenMenuBtn/>
        </div>
    )
}

export default Header;