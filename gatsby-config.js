module.exports = {
  siteMetadata: {
    title: `Printers`,
    description: `tikken23@gmail.com`,
    author: `Datikken`,
  },
  plugins: [
      `gatsby-plugin-sass`,
      {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: `7teha31ppuo3`,
            accessToken: `4XdMOiCOVBpviM1wdpokblZf6binl4K-rNbyxPfhoxM`
          }
      },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/header/LOGO.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
