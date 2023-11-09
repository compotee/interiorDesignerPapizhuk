import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import HomePage from "./pages/home-page/home-page";
import NotfoundPage from "./pages/not-found-page/not-found-page";
import BackFormPage from "./pages/back-form-page/back-form-page";
import PricePage from "./pages/price-page/price-page";
import DesignProjectsPage from "./pages/design-projects-page/design-projects-page";
import ImplementedObjectsPage from "./pages/implemented-objects-page/implemented-objects-page";
import ObjectPage from "./pages/object-page/object-page";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path="*" element={<NotfoundPage />} />
              <Route path="/back-form" element={<BackFormPage/>}/>
              <Route path="/design-projects" element={<DesignProjectsPage/>}/>
              <Route path="/implemented-objects" element={<ImplementedObjectsPage/>}/>
              <Route path="/price" element={<PricePage/>}/>
              <Route path="/object" element={<ObjectPage/>}/>
          </Routes>
        </BrowserRouter> 
  )
}

export default App
