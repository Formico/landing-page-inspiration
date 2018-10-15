import React from 'react'

import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <img alt="" className="logo" src="/logo/formico-logo.svg" />
    <h1 className="tagline">You've Found Your Dev Team</h1>
    <h1 className="biline">We help startups turn ideas into products.</h1>
    <CTA text="Contact Us" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
  )
}

export default Splash

