const analytics = require("./content/settings/analytics.json")
const manifest = require("./content/settings/manifest.json")
const siteMetadata = require("./content/settings/siteMetadata.json")
const googleFonts = require("./content/theme/google_fonts.json")
const colors = require("./content/theme/pallete.json")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "~": `${__dirname}/src`,
        content: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-svg-sprite`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...manifest,
        display: `standalone`,
        icon: `${__dirname}/static${manifest.icon}`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetadata.siteUrl,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `${colors["brand-1"][0]}`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: Object.keys(googleFonts).map(k => googleFonts[k]),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: analytics.trackingId,
        // Setting this parameter is optional
        anonymize: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/NetlifyCMS/cms.js`,
        enableIdentityWidget: true, // Netlify hosting
        publicPath: `_admin`,
        htmlTitle: `Netlify CMS Panel`,
        // htmlFavicon: `/icons/icon-48x48.png`,
        manualInit: true,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/styles/index.css`],
      },
    },

    // `gatsby-plugin-offline`,
  ],
}
