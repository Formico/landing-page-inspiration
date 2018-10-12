import React from 'react'
import Link from 'gatsby-link'

import FancyBackground from '../components/FancyBackground';
import Header from '../components/Header';
import Splash from '../components/Splash';
import Team from '../components/Team';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import TechLove from '../components/TechLove';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = ({ ctaUrl }) => (
  <div style={{ position: 'relative' }}>
    <FancyBackground />
    <Header />
    <Splash ctaUrl={ ctaUrl }/>
    <Team />
    <Process />
    <Pricing />
    <TechLove />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
