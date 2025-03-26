import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomePageFeatureSection from '../components/HomePageFeatures1'
import { CallToActionSection, TestimonialsSection } from '../components/Testimonial_CTA'

export default function Home() {
  return (
    <>
        <Header/>
            <div className="">
                <Hero/>
                <HomePageFeatureSection/>
                <TestimonialsSection/>
                <CallToActionSection/>
            </div>
        <Footer/>
    </>
  )
}
