import React from 'react'
import Link from 'gatsby-link'

import CTA from '../../Index/CTA';

import './index.scss'

const Header = () => (
  <div className="lpi-header">
    <Link to="/">
      <div className="logo-container">
        <img alt="" className="wordmark" src="/logo/formico-wordmark.svg" />
      </div>
    </Link>
    <div className="buttons">
      <CTA text="Submit A Website" link="https://formico.typeform.com/to/RhOpHk" />
      <CTA type="secondary" text="Subscribe" link="https://formico.typeform.com/to/TNtQ6Y" />
    </div>
  </div>
)

export default Header
