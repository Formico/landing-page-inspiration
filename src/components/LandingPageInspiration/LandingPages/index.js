import React from "react"
import { StaticQuery, graphql } from "gatsby"


//import Preview from './Preview';

import routes from '../../../constants/routes'

import './index.scss'

/*
const team = [
  {
    name:  "Anthony Castrio",
    image: "anthony.jpg",
    roles: [PJM],
    tech:  [REACT, JS, PY]
  },
  {
    name:  "Satvik Pendem",
    image: "satvik.jpg",
    roles: [ML_ENG],
    tech:  [REACT, JS, PY]
  },
  {
    name:  "Brent Bovenzi",
    image: "brent.jpg",
    roles: [FS_ENG],
    tech:  [REACT, JS, NATIVE]
  },
  {
    name:  "Nathalyn Nunoo",
    image: "nathalyn.jpg",
    roles: [DES],
    tech:  [GD]
  },
  {
    name:  "Nick Aversano",
    image: "nick.jpg",
    roles: [FS_ENG],
    tech:  [REACT, JS, AWS, PY]
  }
].map((step, idx) => (
  <TeamMember key={ idx }
    name={ step.name }
    image={ step.image }
    roles={ step.roles } />
));
*/

const LandingPages = () => (
  <StaticQuery
    query={graphql`
      query {
        allPagesCsv {
          edges {
            node {
              url
              title
              categories
              score
              filename
            }
          }
        }
      }
    `}
    render={
      data => {
        console.log(data.allPagesCsv.edges);
        const images = data.allPagesCsv.edges.map((node, idx) => (
          <img key={ idx } alt={ `${node.node.title}` } src={ `${routes.IMG}/screenshots/desktop/${node.node.filename}` } />
        ));
        return (
          <div className="lpi-landing-pages">
            { images }
          </div>
        );
      }
    }
  />
)

export default LandingPages

