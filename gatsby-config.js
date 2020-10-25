module.exports = {
  siteMetadata: {
    title: `Fallfish Tenkara`,
    author: {
      name: `Isaac Tait`,
      summary: `who now lives in San Diego but dreams of returning, one day, to Japan.`,
    },
    description: `Exploring Japan One River At A Time`,
    siteUrl: process.env.DEPLOY_PRIME_URL, // From Wes Bos https://github.com/wesbos/wesbos/blob/master/gatsby-config.js
    social: {
      twitter: `Isaac_Tait_83`,
    },
    linkOne: 'Japanese 日本語',
    linkTwo: 'Tenkara Shops',
    linkThree: 'Keiryu Fishing Season',
    linkFour: 'Fishing License',
    linkFive: 'Toll Roads',
    linkSix: 'Links',
    linkSeven: 'About',
    linkEight: 'Tenkara 101',
    linkNine: 'Search',
    linkTen: 'Prefectures',

      menuLinks: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "Japanese 日本語",
          link: "/learning-japanese",
        },
        {
          name: "Tenkara Shops",
          link: "/tenkara-fishing-stores",
        },
        {
          name: "Keiryu Fishing Season",
          link: "/keiryu-fishing-season",
        },
        {
          name: "Fishing License",
          link: "/japanese-fishing-license",
        },
        {
          name: "Toll Roads",
          link: "/toll-roads",
        },
        {
          name: "Links",
          link: "/links",
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Tenkara 101",
          link: "/tenkara-101"
        },
        {
          name: "Search",
          link: "/search",
        },
        {
          name: "Prefectures",
          link: "/tags",
        },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/blog`,
      },
    },
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
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
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
    `gatsby-awesome-pagination`,
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
