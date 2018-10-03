import React from 'react'
import Link from 'gatsby-link'
import ReactSVG from 'react-svg'

import Card from './Card';

import CTA from '../CTA';

import FancyBackground from '../FancyBackground';

import './index.scss'

const Pricing = ({ data }) => {
  return (
  <div className="pricing">
    <FancyBackground />
    <h1 className="tagline">Pricing</h1>
    <div className="pricing-cards">
      <Card
        header="Hourly"
        items={[
          "Starting at $175/hr",
          "Weekly descriptive invoices",
          "Teams scale as needed"
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

