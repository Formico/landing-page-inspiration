import React from 'react'

import routes from '../../../constants/routes.js';

import './index.scss'

class Filters extends React.Component {

  constructor() {
    super();
    
    this.state = {
      showFilters: 'true'
    }

    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleFilters() {
    this.setState(prevState => ({
      showFilters: !prevState.showFilters
    }));
  }

  render() {
    const {
      style,
      isSticky,
      distanceFromTop,
      selectedScreenSize,
      onScreenSizeChange
    } = this.props;

    const { showFilters } = this.state;

    return (
      <div className="lpi-filters" style={ style }>
        <div
          className={ `filters-container ${!isSticky || showFilters || -distanceFromTop < 150 ? 'show' : ''}` }>  
          <div
            className="screen-size-selection">
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
        <div className={`toggle-filters
                        ${showFilters ? 'engaged' : ''}
                        ${isSticky ? '' : 'hide'}`}
             onClick={ this.toggleFilters }>
          { `${showFilters ? "Hide Filters" : "Show Filters"}` }
        </div>
      </div>
    )
  }

}

export default Filters
