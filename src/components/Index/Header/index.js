import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = () => (
  <div className="site-header">
    <Link to="/">
      <div className="logo-container">
        <img alt="" className="wordmark" src="/logo/formico-wordmark.svg" />
      </div>
    </Link>
  </div>
)

export default Header
