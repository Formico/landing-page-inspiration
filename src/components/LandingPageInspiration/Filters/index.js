import React from 'react'

import routes from '../../../constants/routes.js';

import './index.scss'

const Filters = ({
  style,
  selectedScreenSize,
  onScreenSizeChange
}) => (
  <div className="lpi-filters" style={ style }>
    <div className="screen-size-selection">
      <h4>Screen Size</h4>
      <div className="selectors">
        <img
          className={ selectedScreenSize === 'mobile' ?  'selected' : '' }
          alt="mobile"
          src={ `${routes.ICON}/mobile.svg` }
          onClick={ () => onScreenSizeChange('mobile') } />
        <img
          className={ selectedScreenSize === 'tablet' ?  'selected' : '' }
          alt="tablet"
          src={ `${routes.ICON}/tablet.svg` }
          onClick={ () => onScreenSizeChange('tablet') } />
        <img
          className={ selectedScreenSize === 'desktop' ?  'selected' : '' }
          alt="desktop"
          src={ `${routes.ICON}/laptop.svg` }
          onClick={ () => onScreenSizeChange('desktop') } />
      </div>
    </div>
  </div>
)

export default Filters
