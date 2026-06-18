import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Home/navbar'
import ConsultationPage from './Pages/ExpressPage';
import PritikaConsultation from './Pages/PritikaPage';

export default function LandingPage() {
  return (
    <>
 <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/express-consultation" element={<ConsultationPage/>}/>
        <Route path="/pritika-consultation" element={<PritikaConsultation/>}/>

    </Routes>
    </Router>
    </>
  )
}
