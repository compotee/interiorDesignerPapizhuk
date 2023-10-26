import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./home-page-style.css";


function HomePage() {
    return(
        <div>
            <Header/>
            <Link to={ "/price" }>Прайс</Link>
            <Footer/>
        </div>
    )
}

export default HomePage;