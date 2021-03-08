require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const striptags = require("striptags")

const BlogQuery = `
  {
    allMarkdownRemark {
      nodes {
        id
        html
        frontmatter {
          title
          description
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`

const queries = [
  {
    query: BlogQuery,
    transformer: ({ data }) => {
      return data.allMarkdownRemark.nodes.reduce((indices, post) => {
        const pChunks = striptags(post.html, [], "XXX_SPLIT_HERE_XXX").split(
          "XXX_SPLIT_HERE_XXX"
        )

        const chunks = pChunks.map(chnk => ({
          slug: post.fields.slug,
          date: post.frontmatter.date,
          title: post.frontmatter.title,
          excerpt: chnk,
        }))

        if (post.frontmatter.description) {
          chunks.push({
            slug: post.fields.slug,
            date: post.frontmatter.date,
            title: post.frontmatter.title,
            excerpt: post.frontmatter.excerpt,
          })
        }

        const filtered = chunks.filter(chnk => !!chnk.excerpt)

        return [...indices, ...filtered]
      }, [])
    }
  }
];

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
    linkEleven: 'Search',

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
        },
        {
          name: "Search",
          link: "/search",
        },
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
      },
      enablePartialUpdates: true,
      matchFields: ['slug', 'modified'],
    },
  ],
}
