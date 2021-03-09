import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
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
    <div class="mb-6 mr-4 flex flex-row">
      
      <div class="mr-6">
        <Image fixed={data.avatar.childImageSharp.fixed} alt={author.name}/>
      </div>
      
      <p>Written by <span class="font-bold">{author.name}</span> {author.summary} You should follow him on&nbsp;
        <a href={`https://twitter.com/${social.twitter}`} class="text-red-500 hover:bg-red-500 hover:text-white">Twitter</a>.</p>
    </div>
  )
}

export default Bio
