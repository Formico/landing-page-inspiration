import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { pageUrlify } from '../../../common/functions'
import routes from '../../../constants/routes'

import Preview from './Preview';

import './index.scss'

const LandingPages = ({
  selectedCategories,
  selectedScreenSize
}) => (
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
        let websiteData = {};
        data.allPagesCsv.edges.forEach(edge => {
          websiteData[edge.node.filename] = {
            ...edge.node
          }
        });

        let imageData;
        let numResults = 0;
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
          let originalName = edge.node.childImageSharp.fluid.originalName;
          let siteData = websiteData[originalName];
          let returnResult = false;

          if (!selectedCategories || selectedCategories.size < 1) {
            returnResult = true;
            numResults += 1;
          } else {
            siteData.categories.split(', ').forEach((category) => {
              if (selectedCategories.has(category)) {
                returnResult = true;
                numResults += 1;
              }
            });
          }

          return (
            <Preview
              key={ idx }
              visible={ returnResult }
              title={ siteData.title }
              img={ edge.node.childImageSharp.fluid }
              url={ `${routes.LPI}/${pageUrlify(siteData.url)}` } />
            )
        });
        console.log(images.length);
        return (
          <div className="lpi-landing-pages">
            { images }
            { numResults > 0 ? '' : <p className="no-results">No Results</p> }
          </div>
        );
      }
    }
  />
)

export default LandingPages

