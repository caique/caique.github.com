module.exports = {
  siteMetadata: {
    title: `Caique Rodrigues`,
    description: `A collection of insights written by Caique Rodrigues.`,
    author: `Caique Rodrigues`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`, {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases:{sh: "bash", js:"javascript"},
            showLineNumbers: true,
          }
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caique Rodrigues`,
        short_name: `caiquerodrigues`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
