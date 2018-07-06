import React from 'react'
import Link from 'gatsby-link'

import Step from './Step';
import FlashyText from '../FlashyText';

import './index.scss'

const steps = [
  {
    icon: "speech.svg",
    header: "1. Free Consultation",
    description: "Every project starts with a detailed conversation to discover your needs."
  },
  {
    icon: "world.svg",
    header: "2. Team Assembled",
    description: "We tap our exlusive network of top engineers, product managers, and designers to build your dream team."
  },
  {
    icon: "package.svg",
    header: "3. Get to Work",
    description: "You'll have direct access to your team while we work."
  }
].map((step, idx) => (
  <Step icon={ step.icon }
    header={ step.header }
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
