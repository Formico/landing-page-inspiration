import React from 'react'

import routes from '../../../../constants/routes'

import './index.scss'

const Preview = ({ name, image, roles }) => (
  <div className="lpi-preview">
    <img src={ `${routes.IMG}/${image}` } />
    <div className="text">
      <h2 className="name">{ `${name}` }</h2>
      <p className="roles">{ `${roles}` }</p>
    </div>
  </div>
)

export default Preview
