import React from 'react'
import Link from 'gatsby-link'

import FlashyText from '../FlashyText';
import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <h1 className="hero"><FlashyText text="We build great software." /></h1>
    <h1 className="mobile">We build great software.</h1>
    <CTA text="Let's Talk" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
  )
}

export default Splash

