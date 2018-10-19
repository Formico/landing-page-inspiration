import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Preview from './Preview';

import './index.scss'

const LandingPages = ({selectedScreenSize}) => (
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
        mobileImages: allFile(filter:{extension:{regex:"/png/"}, relativeDirectory:{eq:"screenshots/mobile"}}) {
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
        tabletImages: allFile(filter:{extension:{regex:"/png/"}, relativeDirectory:{eq:"screenshots/tablet"}}) {
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
        desktopImages: allFile(filter:{extension:{regex:"/png/"}, relativeDirectory:{eq:"screenshots/desktop"}}) {
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
        console.log(data);
        let websiteData = {};
        data.allPagesCsv.edges.map((edge, idx) => {
          websiteData[edge.node.filename] = {
            ...edge.node
          }
        });

        let imageData;
        switch(selectedScreenSize) {
          case 'mobile':
            imageData = data.mobileImages.edges;
            break;
          case 'tablet':
            imageData = data.tabletImages.edges;
            break;
          default:
            imageData = data.desktopImages.edges;
        }
        let images = imageData.map((edge, idx) => {
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

