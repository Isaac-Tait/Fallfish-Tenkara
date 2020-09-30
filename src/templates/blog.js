import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data, pageContext }) => {
    const articles = data.allMarkdownRemark.node

    return (
        <Layout>
            <SEO title="Blog Posts" />
            <header class="ml-6 mt-4">
                <p class="text-gray-800 text-3xl">{post.frontmatter.title}</p>
                <p class="text-gray-600">{post.frontmatter.date}</p>
            </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer class="ml-2">
                <Pager pageContext={pageContext} />
                <Bio />
            </footer>
        </Layout>
    )
}

export const pageQuery = graphql`
        query ($skip: Int!, $limit: Int!) {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                skip: $skip
                limit: $limit
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
            }
        ` 

    export default Blog