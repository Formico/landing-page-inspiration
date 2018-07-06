import React from 'react'
import ReactSVG from 'react-svg'

import routes from '../../../constants/routes'

import './index.scss'

const Step = ({ icon, header, description }) => (
  <div className="step">
    <ReactSVG
      path={ `${routes.ICON}/${icon}` }
      className="icon"/>
    <div className="text">
      <h2 className="header">{ `${header}` }</h2>
      <p className="description">{ `${description}` }</p>
    </div>
  </div>
)

export default Step
