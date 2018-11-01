import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import './index.scss'

const Preview = ({
  width,
  title,
  img,
  url,
  visible
}) => (
  <div style={{ width: `${width}%` }} className={ `lpi-preview ${visible ? '' : 'hide'}` }>
    <Link to={ url }>
      <Img fluid={ img } />
      <p>{ title }</p>
    </Link>
  </div>
)

export default Preview
