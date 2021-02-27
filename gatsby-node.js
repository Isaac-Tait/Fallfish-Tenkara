const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const blogPagination = path.resolve(`./src/templates/blog-pagination.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === (posts.length - 1) ? null : posts[index + 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Create blog-list pages
  paginate({
    createPage,
    items: result.data.allMarkdownRemark.edges,
    itemsPerPage: 10,
    pathPrefix: '/blog',
    component: blogPagination,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}