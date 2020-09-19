import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <p class="pl-2 font-bold text-lg bg-red-500 text-white">Blog posts referenced by Prefecture</p>
      <p class="ml-2 mt-2">If you are interested in reading about my travels and adventures in a specific Japanese Prefecture then you have come to the right page.</p>
      <ul>
        {group.map(tag => (
          <li class="ml-2 mt-2 tracking-wide " key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" class="uppercase font-bold ml-2">Take me back to the Home Page</Link>
    </div>
    <div class="bg-red-500 mt-24">
        <footer class="flex items-center justify-between text-xs md:text-base">
          <div class="ml-2">
            © 2014 - {new Date().getFullYear()}, Built with
            {` `}
            <a 
              href="https://www.gatsbyjs.org"
              class="hover:text-white"
              target="_blank"  
              rel="noopener noreferrer" 
            > Gatsby</a> and 
            <a 
              href="https://tailwindcss.com"
              class="hover:text-white"
              target="_blank"  
              rel="noopener noreferrer" 
            > TailwindCSS</a>
          </div>

          <div>
            <span class="ml-20 mr-2"> Another 
              <a 
                href="https://www.mountaintopcoding.com"
                class="hover:text-white"
                target="_blank"  
                rel="noopener noreferrer" 
              > mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
            </span>
          </div>
          
        </footer>
      </div>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`