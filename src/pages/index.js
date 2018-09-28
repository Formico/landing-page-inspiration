import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import TechLove from '../components/TechLove';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = ({ ctaUrl }) => (
  <div>
    <Splash ctaUrl={ ctaUrl }/>
    <Process />
    <Pricing />
    <TechLove />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
