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
              name: `notes`,
              path: `${__dirname}/notes/`,
            }
          },
        "gatsby-plugin-mdx"
    ]
}