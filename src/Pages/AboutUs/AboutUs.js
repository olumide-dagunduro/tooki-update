import React from 'react'
import './AboutUs.css'
import Navbar from '../../Components/Navbar/Navbar'
import AboutUsBanner from '../../PagesComponent/AboutUsBanner/AboutUsBanner'
import Footer from '../../Components/Footer/Footer'

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <AboutUsBanner />
        <Footer />
    </div>
  )
}

export default AboutUs