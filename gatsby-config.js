module.exports = {
    siteMetadata: {
      title: `dev.oevl.info`,
      description: `My code journal`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/posts`, name: `posts`,
        },
      },
    ],
  };