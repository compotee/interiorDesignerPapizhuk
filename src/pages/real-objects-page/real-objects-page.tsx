import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ObjectCard from "../../components/object-card/object-card";

import { OBJECTS } from "../../projects/projects";

import './real-objects-page-style.css'

function RealObjectsPage() {
    return(
        <div className="container">
            <Header/>
            <h2 className="title">Реализованные объекты</h2>
            <div className="design-projects-div">
                {
                    OBJECTS.map((element) => {
                        return (<ObjectCard objectCardData={ element }/>);
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default RealObjectsPage;