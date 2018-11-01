import React from 'react'

import './index.scss'

class FilterWidget extends React.Component {
  render() {
    const { selectorData, title } = this.props;

    const selectors = selectorData.map((selector, idx) => (
       <img
        key={ idx }
        className={ selector.isSelected ? 'selected' : '' }
        title={ selector.alt } 
        alt={ selector.alt } 
        src={ selector.src }
        onClick={ () => selector.onClick() } />     
    ));
    
    return (
      <div className="filter-widget">
        <h4>{ title }</h4>
        <div className="selectors">
          { selectors }
        </div>
      </div>
    )
  }
}

export default FilterWidget
