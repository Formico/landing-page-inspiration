import React from 'react'
import Link from 'gatsby-link'

import Step from './Step';
import FlashyText from '../FlashyText';

import './index.scss'

const steps = [
  {
    header: "1. Free Consultation",
    description: "We talk and talk and talk"
  },
  {
    header: "2. Team Assembled",
    description: "Here's Johnnyy!"
  },
  {
    header: "3. Get to Work",
    description: "We work and work and work"
  }
].map((step, idx) => (
  <Step header={ step.header }
    description={ step.description } />
));

const Process = () => (
  <div className="process">
    <h1 className="hero"><FlashyText text="How we work" /></h1>
    <h1 className="mobile">How we work</h1>
    <div className="steps">
      { steps }
    </div>
  </div>
)

export default Process
