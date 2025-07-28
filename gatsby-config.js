/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "3XZMAdMk6XwWQJYf4JxP77",
        token: "63imqNszYsl8HOEdpb7BgpJoSmmWCeBsjwOf4ufqGDhWIQcvRXeTkW0EpEZCOW6DmX5i0ISG9L0HPYlG2sIGg",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
