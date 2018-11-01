/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const common = require(`./src/common/functions`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPagesCsv {
          edges {
            node {
              url
              title
              categories
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
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
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
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
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
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const gatsbyFluidImages = {}
      const imageGraphqlDataAll = [
        {
          images: result.data.mobileImages.edges,
          screen: 'mobile'
        },
        {
          images: result.data.tabletImages.edges,
          screen: 'tablet'
        },
        {
          images: result.data.desktopImages.edges,
          screen: 'desktop'
        }
      ]
      imageGraphqlDataAll.forEach(({ images, screen }) => {
        images.forEach((edge) => {
          const img = edge.node.childImageSharp.fluid;
          if (!gatsbyFluidImages[img.originalName]) {
            gatsbyFluidImages[img.originalName] = {};
          }
          gatsbyFluidImages[img.originalName][screen] = img;
        });
      });

      result.data.allPagesCsv.edges.forEach(({ node }) => {
        // create page according to the fetched data
        const url = common.pageUrlify(node.url);
        createPage({
          path: `/landing-page-inspiration/${url}`, 
          component: path.resolve('./src/pages/landing-page.js'), // the template component
          context: {
            // data here will be passed as props to the component `this.props.pageContext`,
            // as well as to the graphql query as graphql arguments.
            url: node.url,
            title: node.title,
            categories: node.categories,
            score: node.score,
            filename: node.filename,
            images: gatsbyFluidImages[node.filename]
          },
        });
      });

      resolve();
    });
  });
};
