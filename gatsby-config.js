module.exports = {
  siteMetadata: {
    title: 'Formico'
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123517771-1",
        head: true,
      },
    },
  ],
}
