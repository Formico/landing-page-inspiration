import React from 'react'

import FancyAccents from '../FancyAccents';

import './index.scss'

const logos = [
  {
    icon: "aws.svg",
    description: "Amazon Web Services"
  },
  {
    icon: "gcp.svg",
    description: "Google Cloud Platform"
  },
  {
    icon: "digitalocean.png",
    description: "Digital Ocean"
  },
  {
    icon: "reactjs.png",
    description: "ReactJS"
  },
  {
    icon: "graphql.png",
    description: "GraphQL"
  },
  {
    icon: "postgres.svg",
    description: "PostgreSQL"
  },
  {
    icon: "python.png",
    description: "Python"
  },
  {
    icon: "nodejs.svg",
    description: "NodeJS"
  }
].map((logo, idx) => (
  <img className="logo" key={ idx } src={ `/foreign-logos/${logo.icon}` } alt={ `${logo.description}` } />
));

const TechLove = () => (
  <div className="tech-love">
    <FancyAccents />
    <div className="content">
      <h2 className="title">We build technology solutions you'll love.</h2>
      <div className="logos">
        { logos }
      </div>
    </div>
  </div>
)

export default TechLove;
