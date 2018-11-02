import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import './index.scss'

const Preview = ({
  width,
  img,
  url,
  visible
}) => (
  <div style={{ width: `100%` }} className={ `lpi-preview ${visible ? '' : 'hide'}` }>
    <Link to={ url }>
      <Img fluid={ img } />
    </Link>
  </div>
)

export default Preview
