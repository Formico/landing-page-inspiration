import React from 'react'
import ReactSVG from 'react-svg'

import routes from '../../../constants/routes'

import './index.scss'

const Quote = ({ icon, header, description }) => (
  <div className="quote">
    <ReactSVG
      path={ `${routes.ICON}/${icon}` }
      className="icon"/>
    <h2 className="header">{ `${header}` }</h2>
    <p className="description">{ `${description}` }</p>
  </div>
)

export default Quote
