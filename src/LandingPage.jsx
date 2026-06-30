import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultationPage from './Pages/ExpressPage';
import PritikaConsultation from './Pages/PritikaPage';
import ScrollToTop from './Helper/scrollToTop';

export default function LandingPage() {
  return (
    <>
 <Router>
    <ScrollToTop/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/express-consultation" element={<ConsultationPage/>}/>
        <Route path="/pritika-consultation" element={<PritikaConsultation/>}/>
    </Routes>
    </Router>
    </>
  )
}
