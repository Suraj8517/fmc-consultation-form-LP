import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultationPage from './Pages/ExpressPage';
import PritikaConsultation from './Pages/PritikaPage';
import ScrollToTop from './Helper/scrollToTop';
import { getUserInfoFromParams } from '../src/Helper/GetUserInfo'

export default function LandingPage() {
    const userInfo = getUserInfoFromParams();
      console.log(userInfo)
  return (
    <>
 <Router>
    <ScrollToTop/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/express-consultation" element={<ConsultationPage info={userInfo}/>}/>
        <Route path="/pritika-consultation" element={<PritikaConsultation info={userInfo}/>}/>
    </Routes>
    </Router>
    </>
  )
}
