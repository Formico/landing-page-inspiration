import React from 'react'

import routes from '../../../../constants/routes'

import './index.scss'

const Preview = ({ title, filename }) => (
  <div className="lpi-preview">
    <img alt={ `${title}` } src={ `${routes.IMG}/screenshots/desktop/${filename}` } />
  </div>
)

export default Preview
