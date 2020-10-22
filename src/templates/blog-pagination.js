import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Pager from "../components/pager"

class BlogPagination extends React.Component {
  render() {
    const { data, location } = this.props
    const posts = data.allMarkdownRemark.edges;
  
    return (
      <Layout location={location}>
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3>
                    <Link to={node.fields.slug}> {title} </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
                </section>
              </article>
            )
        })}
  
        <Pager pageContext={pageContext} />
      </Layout>
    )
  }
};

export default BlogPagination;

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
