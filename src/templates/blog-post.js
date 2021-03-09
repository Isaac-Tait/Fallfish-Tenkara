import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Navigation from "../components/navigation"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Comments from "../components/comments-queue"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <div location={location}>
      <Navigation />
      <Link to="/" class="uppercase font-bold text-red-500">Take me back to the Home Page</Link>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      
      <article>
        <header class="pl-6 mt-4 bg-red-500">
            <p class="text-white text-3xl">{post.frontmatter.title}</p>
            <p class="pl-2 text-gray-300">{post.frontmatter.date}</p>
        </header>
          
        <div class="px-2 md:w-2/3 md:mx-auto">
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      <Comments /> 

      <div>
            <p class="font-semibold flex w-1/2 justify-center mx-auto">Blog Navigation</p>
            <nav class="text-xs md:text-base flex w-1/2 justify-between mx-auto">

            <p class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">
            {previous && (
                <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title} 
                </Link>
                )}
            </p>

            <p class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">
            {next && (
                <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                </Link>
                )}
            </p>
      
            </nav>
        </div>

      <div class="w-1/2 mx-auto">
          <Bio />
      </div>
      
      <Footer />
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
