import React from 'react'
import Link from 'gatsby-link'

import FancyBackground from '../components/Index/FancyBackground';
import Header from '../components/Index/Header';
import Splash from '../components/Index/Splash';
import Team from '../components/Index/Team';
import Process from '../components/Index/Process';
import Pricing from '../components/Index/Pricing';
import TechLove from '../components/Index/TechLove';
import Contact from '../components/Index/Contact';
import Footer from '../components/Index/Footer';
import Layout from '../layouts';

const IndexPage = ({ ctaUrl }) => (
  <Layout>
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
  </Layout>
)

export default IndexPage
