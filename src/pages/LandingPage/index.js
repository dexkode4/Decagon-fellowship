import React from 'react'
import About from '../../components/About'
import Accordion from '../../components/Accordion'
import Jumbotron from '../../components/Jumbotron'
import Pricing from '../../components/Pricing'
import Walkthrough from '../../components/Walkthrough'

function LandingPage() {
  return (
    <div>
       <Jumbotron/>
       <About/>
       <Walkthrough/>
       <Pricing/>
       <Accordion/>
    </div>
  )
}

export default LandingPage
