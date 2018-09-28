import React from 'react'
import Link from 'gatsby-link'

import Step from './Step';

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
    description: "We find the best engineers, designers, and product managers for the job."
  },
  {
    icon: "briefcase.svg",
    header: "3. Get to Work",
    description: "Intelligent milestones, minimum weekly updates, and direct access to your team."
  }
].map((step, idx) => (
  <Step key={ idx }
    icon={ step.icon }
    header={ step.header }
    description={ step.description } />
));

const Process = () => (
  <div className="process">
    <div className="top-accent-1" />
    <div className="top-accent-2" />
    <h1>Our process puts you first.</h1>
    <div className="steps">
      { steps }
    </div>
    <div className="bottom-accent-1" />
    <div className="bottom-accent-2" />
  </div>
)

export default Process
