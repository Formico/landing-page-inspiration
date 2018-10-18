module.exports = {
  siteMetadata: {
    title: 'Formico'
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img/`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123517771-1",
        head: true,
      },
    },
  ],
}
