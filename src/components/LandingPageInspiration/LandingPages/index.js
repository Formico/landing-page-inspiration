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
        allFile(filter:{extension:{regex:"/png/"}, relativeDirectory:{eq:"screenshots/desktop"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  originalName
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={
      data => {
        let websiteData = {};
        data.allPagesCsv.edges.map((edge, idx) => {
          websiteData[edge.node.filename] = {
            ...edge.node
          }
        });
        const images = data.allFile.edges.map((edge, idx) => {
          return (
            <Preview
              key={ idx }
              title={ websiteData[edge.node.childImageSharp.fluid.originalName].title }
              img={ edge.node.childImageSharp.fluid } />
            )
        });
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

