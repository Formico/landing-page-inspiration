import React from 'react'
import Link from 'gatsby-link'

import FlashyText from '../FlashyText';
import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <img className="logo" src="/logo/formico-logo.svg" />
    <h1 className="tagline">Stop Looking For Your Dev Team</h1>
    <h1 className="biline">You've Already Found Us</h1>
    <CTA text="Tell Me More" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
  )
}

export default Splash

