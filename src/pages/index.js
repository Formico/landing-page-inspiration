import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const IndexPage = () => (
  <div>
    <Splash />
    <Process />
    <Contact />
    <Testimonials />
  </div>
)

export default IndexPage
