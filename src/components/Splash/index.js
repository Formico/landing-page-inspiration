import React from 'react'
import Link from 'gatsby-link'

import FlashyText from '../FlashyText';

import './index.scss'

const Splash = () => (
  <div className="splash">
    <h1 className="hero"><FlashyText text="We build great software." /></h1>
    <h1 className="mobile">We build great software.</h1>
    <Link className="button-cta" to="/page-2/">Let's Talk</Link>
  </div>
)

export default Splash
