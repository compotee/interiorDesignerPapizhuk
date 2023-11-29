import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Object from "../../components/object/object";
import { DESIGN_PROJECTS } from "../../projects/projects";

function DesignProjectsPage() {
    // for (var key of Object.keys(DESIGN_PROJECTS)) {
    //     console.log(typeof(DESIGN_PROJECTS.first))
    // }

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Дизайн проекты</h2>
            <Object objectData={ DESIGN_PROJECTS.first }/>
            <Footer/>
        </div>
    )
}

export default DesignProjectsPage;