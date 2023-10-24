import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import HomePage from "./pages/home-page/home-page";
import NotfoundPage from "./pages/not-found-page/not-found-page";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter> 
  )
}

export default App
