import { Link } from "react-router-dom";
import Header from "../../components/header/header";

import "./home-page-style.css";


function HomePage() {
    return(
        <div>
            <Header/>
            <Link to={ "/back-form" }>Форма обратной связи</Link> 
        </div>
    )
}

export default HomePage;