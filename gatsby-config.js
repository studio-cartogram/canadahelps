module.exports = {
  plugins: [
    'gatsby-plugin-postcss-sass',
    '@jacobmischka/gatsby-plugin-react-svg',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato\:300,400,400i,700,700i` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ]
};