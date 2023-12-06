import { useLocation } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import './object-page-style.css'

function ObjectPage() {
    const location = useLocation();
    
    return(
        <div className="container">
            <Header/>
            <img className="object-main-img" src={ location.state.mainImg } alt="" />
            <div className="object-main-inf">
                <h2 className="object-title">{ location.state.name }</h2>
                <p className="object-main-text">Локация: { location.state.place }</p>
                <p className="object-main-text">Площадь: { location.state.square } м²</p>
            </div>
            <p className="object-inf">{ location.state.inf }</p>
            <div className="object-imgs-div">
                {
                    location.state.img.map((element) => {
                        return (<img className="object-img" src={ element } alt="" />);
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default ObjectPage;