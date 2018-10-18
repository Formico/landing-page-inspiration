import React from 'react'
import Img from "gatsby-image"

import routes from '../../../../constants/routes'

import './index.scss'

const Preview = ({ title, img }) => (
  <div className="lpi-preview">
    <Img fluid={ img } />
    <p>{ title }</p>
  </div>
)

export default Preview
