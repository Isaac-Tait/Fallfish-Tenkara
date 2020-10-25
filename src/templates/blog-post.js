import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Navigation from "../components/navigation"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <div>
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
    
        <footer class="ml-2">
            <Bio />
        </footer>
      </article>

      <nav class="flex flex-wrap justify-between ml-2">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
