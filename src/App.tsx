import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import HomePage from "./pages/home-page/home-page";
import NotfoundPage from "./pages/not-found-page/not-found-page";
import PricePage from "./pages/price-page/price-page";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path="*" element={<NotfoundPage />} />
              <Route path="/price" element={<PricePage/>}/>
          </Routes>
        </BrowserRouter> 
  )
}

export default App
