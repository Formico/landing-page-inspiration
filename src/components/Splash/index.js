import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Splash = () => (
  <div className="splash">
    <h1>We build great software</h1>
    <Link className="button-cta" to="/page-2/">Get In Touch</Link>
  </div>
)

export default Splash
