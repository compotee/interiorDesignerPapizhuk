import { useLocation } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function ObjectPage() {
    const { state } = useLocation();

    console.log(state)

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Страница объекта</h2>
            <Footer/>
        </div>
    )
}

export default ObjectPage;