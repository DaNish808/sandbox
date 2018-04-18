module.exports = {
  siteMetadata: {
    title: 'React Display Component Sandbox',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ],
}
