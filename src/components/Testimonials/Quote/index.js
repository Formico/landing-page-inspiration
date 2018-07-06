import React from 'react'

import routes from '../../../constants/routes'

import './index.scss'

const Quote = ({ text, image, person, title, company }) => (
  <div className="quote">
    <p className="text">{ text }</p>
    <div className="info">
      <div className="image" />
      <div className="personal-info">
        <h3 className="name">{ person }</h3> 
        <p>{ title }, <strong>{ company }</strong></p>
      </div>
    </div>
  </div>
)

export default Quote
