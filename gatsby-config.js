module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
              isTSX: true, // defaults to false
              jsxPragma: `jsx`, // defaults to "React"
              allExtensions: true, // defaults to false
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
          resolve: "gatsby-source-filesystem",
          options: {
            name: `content`,
            path: `${__dirname}/content/`,
          }
      },
        "gatsby-plugin-mdx",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: 'isabel.tech',
              short_name: 'isabel.tech',
              start_url: '/',
              icon: 'src/images/favicon.png',
            },
        },
    ]
}