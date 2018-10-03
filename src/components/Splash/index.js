import React from 'react'
import Link from 'gatsby-link'
import ReactSVG from 'react-svg'

import CTA from '../CTA';

import FancyBackground from './FancyBackground';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <FancyBackground />
    <img className="logo" src="/logo/formico-logo.svg" />
    <h1 className="tagline">Stop Looking For Your Dev Team</h1>
    <h1 className="biline">You've already found us.</h1>
    <CTA text="I Have a Project" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
  )
}

export default Splash

