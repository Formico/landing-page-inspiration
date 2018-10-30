import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import './index.scss'

const Preview = ({ title, img, url }) => (
  <div className="lpi-preview">
    <Link to={ url }>
      <Img fluid={ img } />
      <p>{ title }</p>
    </Link>
  </div>
)

export default Preview
