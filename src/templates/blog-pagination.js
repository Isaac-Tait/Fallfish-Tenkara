import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const BlogPagination = ({ data, location }) => {
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()
        
        return (
            <Layout location={location} title={siteTitle}>
                <SEO
                    title={siteTitle}
                    keywords={[`blog`, `tenkara`, `gatsby`]}
                />

                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <div key={node.fields.slug}>
                        <Link to={node.fields.slug}>{title}</Link>
                        <p>{node.frontmatter.date}</p>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                )
                })}

                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        ← Previous Page
                    </Link>
                )}

                {Array.from({ length: numPages }, (_, i) => (
                <li
                key={`pagination-number${i + 1}`}
                >
                <Link
                    to={`/${i === 0 ? '' : i + 1}`}
                >
                    {i + 1}
                </Link>
                </li>
                ))}

                {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page →
                    </Link>
                )}
            </Layout>            
    )
};

export default BlogPagination

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
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
