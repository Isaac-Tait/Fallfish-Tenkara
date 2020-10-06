import React from "react"
import { Link } from "gatsby"

const BlogPagination = ({ props }) => {
        const { currentPage, numPages } = props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()
    return (
        <div>
            <nav>
                <ul>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev">
                            ← Previous Page
                        </Link>
                    )}
                    {!isLast && (
                        <Link to={nextPage} rel="next">
                            Next Page →
                        </Link>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default BlogPagination

export const pageQuery = graphql`
query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
    ) {
    edges {
        node {
        excerpt
        frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
             }
          }
       }
    }
  }
`
