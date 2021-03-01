require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const BlogQuery = `
  {
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            description
            tags
            title
          }
          internal {
            content
          }
        }
      }
    }
`;

const queries = [
  {
    query: BlogQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes, // optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    matchFields: ['slug', 'modified'],
  }
]

module.exports = {
  siteMetadata: {
    title: `Fallfish Tenkara`,
    author: {
      name: `Isaac Tait`,
      summary: `who now lives in San Diego but dreams of returning, one day, to Japan.`,
    },
    description: `Exploring Japan One River At A Time`,
    siteUrl: `https://www.fallfishtenkara.com`,
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
    linkNine: 'Tags',
    linkTen: 'Thank You',

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
          name: "Prefectures",
          link: "/tags",
        },
        {
          name: "Thank You",
          link: "/thank-you",
        }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fallfish Tenkara`,
        start_url: `/`,
        icon: `content/assets/FfT_Logo_Thumbnail.png`
      }
    },
    {
      resolve: `gatsby-plugin-remove-serviceworker`,
    },
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
        icon: `content/assets/FfT_Logo_Thumbnail.png`,
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
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        skipIndexing: false, // default: false, useful for e.g. preview deploys or local development
      },
    },
  ],
}
