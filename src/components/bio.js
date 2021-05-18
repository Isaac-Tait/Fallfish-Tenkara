import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 75, height: 75, layout: CONSTRAINED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div class="mb-6 mr-4 text-xs md:text-base md:flex md:flex-row">
      
      <div class="mr-6">
        <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt={author.name}/>
      </div>
      
      <p>Written by <span class="font-bold">{author.name}</span> {author.summary} You should follow him on&nbsp;<a href={`https://twitter.com/${social.twitter}`} class="text-red-500 hover:bg-red-500 hover:text-white">Twitter</a>.</p>
    </div>
  )
}

export default Bio
