import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/">
      <div className="logo-container">
        <img className="logo" src="/static/formico-logo.png" />
        <img className="wordmark" src="/static/formico-wordmark.png" />
      </div>
    </Link>
  </div>
)

export default Header
