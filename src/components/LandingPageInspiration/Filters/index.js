import React from 'react'
import Link from 'gatsby-link'

import routes from '../../../constants/routes.js';
import categories from '../../../constants/lpi-categories.js';

import FilterWidget from './FilterWidget';

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
      selectedCategories,
      selectedScreenSize,
      previewSize,
      toggleCategory,
      onScreenSizeChange,
      adjustPreviewSize
    } = this.props;

    const { showFilters } = this.state;
    const {
      E_COMMERCE,
      HEALTHCARE,
      FINANCE,
      VIDEO_GAMES
    } = categories;

    const screenSizeFilterData = [
      {
        isSelected: selectedScreenSize === 'mobile',
        alt: "Mobile",
        src: `${routes.ICON}/mobile.svg`,
        onClick: () => onScreenSizeChange('mobile')
      },
      {
        isSelected: selectedScreenSize === 'tablet',
        alt: "Tablet",
        src: `${routes.ICON}/tablet.svg`,
        onClick: () => onScreenSizeChange('tablet')
      },
      {
        isSelected: selectedScreenSize === 'desktop',
        alt: "Desktop",
        src: `${routes.ICON}/laptop.svg`,
        onClick: () => onScreenSizeChange('desktop')
      }
    ];

    const categoryFilterData = [
      {
        isSelected: selectedCategories.has(E_COMMERCE),
        alt: E_COMMERCE,
        src: `${routes.ICON}/cart.svg`,
        onClick: () => toggleCategory(E_COMMERCE)
      },
      {
        isSelected: selectedCategories.has(HEALTHCARE),
        alt: HEALTHCARE,
        src: `${routes.ICON}/health.svg`,
        onClick: () => toggleCategory(HEALTHCARE)
      },
      {
        isSelected: selectedCategories.has(FINANCE),
        alt: FINANCE,
        src: `${routes.ICON}/dollar.svg`,
        onClick: () => toggleCategory(FINANCE)
      },
      {
        isSelected: selectedCategories.has(VIDEO_GAMES),
        alt: VIDEO_GAMES,
        src: `${routes.ICON}/controller.svg`,
        onClick: () => toggleCategory(VIDEO_GAMES)
      }
    ];

    return (
      <nav className="lpi-filters" style={ style }>
        <div className={ `top-bar ${!isSticky || showFilters || -distanceFromTop < 150 ? 'show' : ''}` }>  
          <Link to="/" className="logo-container">
            <img alt="" className="wordmark" src="/logo/formico-wordmark.svg" />
          </Link>
          <div className="filters-container">
            <FilterWidget
              selectorData={ screenSizeFilterData }
              title="Screen Size" />
            <FilterWidget
              selectorData={ categoryFilterData }
              title="Categories" />
            <div className="preview-size-slider">
              <h4>Adjust Preview Size</h4>
              <input
                type="range"
                min="10"
                max="100"
                value={ previewSize }
                onChange={ adjustPreviewSize } />
            </div>
          </div>
        </div>
        <div className={ `toggle-filters ${isSticky ? '' : 'hide'}` }
             onClick={ this.toggleFilters }>
          { `${showFilters ? "Hide Filters" : "Show Filters"}` }
        </div>
      </nav>
    )
  }

}

export default Filters
