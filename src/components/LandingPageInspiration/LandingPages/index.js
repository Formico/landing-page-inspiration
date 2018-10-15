import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Preview from './Preview';

import './index.scss'

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
          <Preview
            key={ idx}
            title={ node.node.title }
            filename={ node.node.filename } />
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

