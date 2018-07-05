import React from 'react'
import ReactSVG from 'react-svg'

import routes from '../../../constants/routes'

import './index.scss'

const Step = ({ image, header, description }) => (
  <div className="step">
    <ReactSVG
      path={ `${routes.ICON}/${image}` }
      className="icon"/>
    <h2 className="header">{ `${header}` }</h2>
    <p className="description">{ `${description}` }</p>
  </div>
)

export default Step
