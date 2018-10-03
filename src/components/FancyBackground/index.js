import React from 'react'

import './index.scss'

class FancyBackground extends React.Component {

  createColumns = () => {
    let columns = [];
    const cellTypes = ['filled', 'unfilled'];

    for (let i = 0; i < 6; i++) {
      let cells = []

      for (let j = 0; j < 12; j++) {
        let cellType = cellTypes[Math.floor(Math.random() * cellTypes.length)];
        cells.push(<div key={ j } className={ `fancy-cell ${cellType}` } />);
      }

      columns.push(<div key={ i } className={ `fancy-column col-${i}` }>{ cells }</div>);
    }

    return columns
  };

  render() {
    return (
      <div className="fancy-background">
        <div className="fancy-left">
          { this.createColumns() }
        </div>
        <div className="fancy-right">
          { this.createColumns() }
        </div>
      </div>
    )
  }
}

export default FancyBackground

