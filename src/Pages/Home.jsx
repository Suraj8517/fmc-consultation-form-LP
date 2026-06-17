import React from 'react'
import HomeHero from '../Components/Home/HomeHero'
import HomeContent from '../Components/Home/HomeContent'
import AboutPritikaSection from '../Components/Home/AboutPritikaSection'
import StatsSection from '../Components/Home/StatSection'
import FitMomDifference from '../Components/Home/FitmomDifference'
import TestimonialsSection from '../Components/Home/TransformationSection'
import TransformationSection from '../Components/Home/TestimonialImages'
import ConsultationSection from '../Components/Home/ConsultationSection'
import FAQSection from '../Components/Home/FAQSection'
export default function Home() {
  return (
    <>
    <HomeHero /> 
    <HomeContent/>  
    <AboutPritikaSection/>
     <StatsSection/> 
     <FitMomDifference/>
     <TestimonialsSection/>
     <TransformationSection/>
     <ConsultationSection/>
     <FAQSection/>
    </>
  )
}
