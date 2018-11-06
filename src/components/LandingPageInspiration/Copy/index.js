import React from 'react'

import FancyBackground from '../../Index/FancyBackground';

import CTA from '../../Index/CTA';

import './index.scss'

const Copy = ({ isSticky }) => (
  <div className={ `lpi-copy ${isSticky ? 'sticky' : ''}` }>
    <FancyBackground />
    <div className="content">
      <h1>Landing Page Inspiration</h1>
      <p>{`Learn from the best, so you don't look like the rest.`}</p>
      <div className="buttons">
        <CTA text="Submit A Website" link="https://formico.typeform.com/to/RhOpHk" />
        <CTA type="secondary" text="Subscribe" link="https://formico.typeform.com/to/TNtQ6Y" />
      </div>
    </div>
  </div>
)

export default Copy
