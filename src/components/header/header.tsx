import logo from "./img/logo.svg";
import "./header-style.css";

function Header() {
    return (
        <div>
            <img src={ logo } alt='Логотип'/>
        </div>
    )
}

export default Header;