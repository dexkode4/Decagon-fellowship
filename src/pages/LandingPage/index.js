import React from 'react'
import About from '../../components/About'
import AboutDecagon from '../../components/AboutDecagon'
import Accordion from '../../components/Accordion'
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
       <Accordion/>
    </div>
  )
}

export default LandingPage
