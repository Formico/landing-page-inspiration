import React from 'react'
import Link from 'gatsby-link'
import ReactSVG from 'react-svg'

import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <img className="logo" src="/logo/formico-logo.svg" />
    <h1 className="tagline">Stop Looking For Your Dev Team</h1>
    <h1 className="biline">We help startups turn ideas into products.</h1>
    <CTA text="Contact Us" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
  )
}

export default Splash

