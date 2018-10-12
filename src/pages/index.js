import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';
import Team from '../components/Team';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import TechLove from '../components/TechLove';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FancyBackground from '../components/FancyBackground';

const IndexPage = ({ ctaUrl }) => (
  <div style={{ position: 'relative' }}>
    <FancyBackground />
    <Splash ctaUrl={ ctaUrl }/>
    <Team />
    <Pricing />
    <TechLove />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
