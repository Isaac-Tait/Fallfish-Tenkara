module.exports = {
  siteMetadata: {
    title: `Fallfish Tenkara`,
    author: {
      name: `Isaac Tait`,
      summary: `who now lives in San Diego but dreams of returning one day to Japan.`,
    },
    description: `Exploring Japan One River At A Time`,
    siteUrl: process.env.DEPLOY_PRIME_URL, // From Wes Bos https://github.com/wesbos/wesbos/blob/master/gatsby-config.js
    social: {
      twitter: `Isaac_Tait_83`,
    },
    linkOne: 'Learning Japanese',
    linkTwo: 'Tenkara Fishing Stores',
    linkThree: 'Keiryu Fishing Season',
    linkFour: 'Japanese Fishing License',
    linkFive: 'Toll Roads',
    linkSix: 'Links',
    linkSeven: 'About',
    linkEight: 'Tenkara 101',

      menuLinks: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Learning Japanese",
          link: "pages/learning-japanese",
        },
        {
          name: "Tenkara Fishing Stores",
          link: "pages/tenkara-fishing-stores",
        },
        {
          name: "Keiryu Fishing Season",
          link: "pages/keiryu-fishing-season",
        },
        {
          name: "Japanese Fishing License",
          link: "pages/japanese-fishing-license",
        },
        {
          name: "Toll Roads",
          link: "pages/toll-roads",
        },
        {
          name: "Links",
          link: "pages/links",
        },
        {
          name: "About",
          link: "pages/about"
        },
        {
          name: "Tenkara 101",
          link: "pages/tenkara-101"
        },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require('tailwindcss')
          ]
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/assets`
      }
    },
    { 
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `logos`,
         path: `${__dirname}/content/assets/logos`,
       },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
