import React from 'react'

import Card from './Card';

import CTA from '../CTA';

import './index.scss'

const Pricing = ({ data }) => {
  return (
  <div className="pricing">
    <h1 className="tagline">Pricing</h1>
    <div className="pricing-cards">
      <Card
        header="Weekly"
        items={[
          "Team scales as needed",
          "Descriptive invoices",
          "Starting at $7,500/wk",
        ]} />
      <p className="or">or</p>
      <Card
        header="Project Based"
        items={[
          "Regularly paced milestones",
          "Minimum weekly updates",
          "Easily add continuing support"
        ]} />
    </div>
    <CTA text="Price My Project" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
  )
}

export default Pricing;

