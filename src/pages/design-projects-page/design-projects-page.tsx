import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import DesignProject from "../../components/object/design-project";
import { DESIGN_PROJECTS } from "../../projects/projects";

import "./design-projects-page-style.css"

function DesignProjectsPage() {
    return(
        <div className="container">
            <Header/>
            <h2 className="title">Дизайн проекты</h2>
            <div className="design-projects-div">
                {
                    DESIGN_PROJECTS.map((element) => {
                        return (<DesignProject objectData={ element }/>);
                    })
                }
            </div>
            
            <Footer/>
        </div>
    )
}

export default DesignProjectsPage;