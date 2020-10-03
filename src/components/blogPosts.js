import React from "react"
import { useStaticQuery, Link } from "gatsby"

import SEO from "../components/seo"

const BlogPosts = ({ children }) => {
    const data = useStaticQuery(graphql`
        query Pager {
            allMarkdownRemark {
                totalCount 
                nodes {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)
    const pages = data.Pager.allMarkdownRemark.nodes

    return (
        <div>
            <SEO />
            <div>
                {pages.map((blog) => (
                    <div>
                        <Link to={`/${blog.slug.current}`}>
                            <p>Blog Posts </p>
                        </Link>
                    </div>
                ))}
            </div>
            <p>{children}</p>
        </div>
    )
} 

export default BlogPosts