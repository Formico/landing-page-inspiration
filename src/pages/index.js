import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const IndexPage = ({ ctaUrl }) => (
  <div>
    <Splash ctaUrl={ ctaUrl }/>
    <Process />
  </div>
)

export default IndexPage
