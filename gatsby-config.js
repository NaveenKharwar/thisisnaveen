module.exports = {
  siteMetadata: {
    title: `Naveen Kharwar - Developer`,
    description: `Howdy! I'm Naveen Kharwar — a freelance designer and Web/WordPress developer from India.`,
    author: `@naveenkharwar`,
    siteUrl: `https://www.naveenkharwar.dev`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-sitemap`,
        options: {
            exclude: ['/404'],
        },
    },
    {
        resolve: `gatsby-plugin-robots-txt`,
        options: {
            policy: [{ userAgent: '*', allow: '/' }]
        }
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0f1621`,
        theme_color: `#0f1621`,
        display: `minimal-ui`,
        icon: `src/images/naveenkharwarCircle.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [`Manrope:200,300,400, 500, 600, 700, 800,`, `Raleway:300,400,600,700,800`]
      },
    },
  ],
}
