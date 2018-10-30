import React from 'react'
import Link from 'gatsby-link'

import FancyBackground from '../../Index/FancyBackground';

import './index.scss'

const Header = () => (
  <div className="lpi-header">
    <FancyBackground />
    <Link to="/">
      <div className="logo-container">
        <img alt="" className="wordmark" src="/logo/formico-wordmark.svg" />
      </div>
    </Link>
  </div>
)

export default Header
