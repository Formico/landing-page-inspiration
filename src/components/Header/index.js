import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="temp-logo">
      <div className="blockA" />
      <div className="blockB" />
    </div>
    <h1>
      <Link to="/">{ siteTitle }</Link>
    </h1>
  </div>
)

export default Header
