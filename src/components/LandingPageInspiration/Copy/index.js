import React from 'react'

import FancyBackground from '../../Index/FancyBackground';

import CTA from '../../Index/CTA';

import './index.scss'

const Copy = () => (
  <div className="lpi-copy">
    <FancyBackground />
    <div className="content">
      <h1>Landing Page Inspiration</h1>
      <p>{`Learn from the best, so you don't look like the rest.`}</p>
      <CTA text="Submit A Website" link="https://formico.typeform.com/to/RhOpHk" />
    </div>
  </div>
)

export default Copy
