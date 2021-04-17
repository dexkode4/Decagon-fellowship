import React from 'react'
import About from '../../components/About'
import AboutDecagon from '../../components/AboutDecagon'
import Accordion from '../../components/Accordion'
import Alumni from '../../components/Alumni'
import Footer from '../../components/Footer'
import Jumbotron from '../../components/Jumbotron'
import Pricing from '../../components/Pricing'
import Testimonial from '../../components/Testimonial'
import Walkthrough from '../../components/Walkthrough'

function LandingPage() {
  return (
    <div>
       <Jumbotron/>
       <About/>
       <Walkthrough/>
       <Pricing/>
       <AboutDecagon/>
       <Testimonial/>
       <Alumni/>
       <Accordion/>
       <Footer/>
    </div>
  )
}

export default LandingPage
