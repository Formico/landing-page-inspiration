import React from 'react'

import './index.scss'

const PricingCard = ({ header, items }) => {
  console.log(items);
  return (
   <div className="pricing-card">
    <h2 className="header">{ `${header}` }</h2>
      <ol className="pricing-features">
        { 
          items ? items.map((item, idx) => (
            <li className="feature" key={ idx }>{ item }</li>
          )) : ''
        }
      </ol>
    </div>
  );
}

export default PricingCard
