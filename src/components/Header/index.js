import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/">
      <div className="logo-container">
        <img className="wordmark" src="/logo/formico-wordmark.svg" />
      </div>
    </Link>
  </div>
)

export default Header
