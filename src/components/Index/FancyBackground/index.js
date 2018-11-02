import React from 'react'

import './index.scss'

class FancyBackground extends React.Component {

  createColumns = ({ numCols=6, numCells=50 }) => {
    let columns = [];
    const cellTypes = ['filled', 'unfilled'];

    for (let i = 0; i < numCols; i++) {
      let cells = []

      for (let j = 0; j < numCells; j++) {
        let cellType = cellTypes[Math.floor(Math.random() * cellTypes.length)];
        cells.push(<div key={ j } className={ `fancy-cell ${cellType}` } />);
      }

      columns.push(<div key={ i } className={ `fancy-column col-${i}` }>{ cells }</div>);
    }

    return columns
  };

  render() {
    const { numCols, numCells } = this.props;

    return (
      <div className="fancy-background">
        <div className="fancy-left">
          { this.createColumns({ numCols, numCells }) }
        </div>
        <div className="fancy-right">
          { this.createColumns({ numCols, numCells }) }
        </div>
      </div>
    )
  }
}

export default FancyBackground

