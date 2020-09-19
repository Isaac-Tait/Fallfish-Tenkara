import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Tags from "../templates/tags.js"

const Prefectures = ({ location }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const data = useStaticQuery(graphql`
    query {
      desktopLogo: file(absolutePath: { regex: "/FfT_Logo_Desktop.png/"}) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 50) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mobileLogo: file(
        absolutePath: { regex: "/FfT_Logo_Mobile.png/"}
      ) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
`)

const logos = [
  data.mobileLogo.childImageSharp.fluid,
  {
    ...data.desktopLogo.childImageSharp.fluid,
    media: `(min-width: 768px)`
  }
]

    if (location.pathname === rootPath) {
        header = (
        <div class="ml-20 mr-20 mb-2">
            <Image
            fluid={logos}        
            alt="Fallfish Tenkara"
            />
        </div>
        )
    } else {
        header = (
        <div class="ml-20 mr-20 mb-2">
            <Link to={`/`}>
            <Image
                fluid={logos}
                alt="Fallfish Tenkara"
            />
            </Link>
        </div>
            
        )
    }
    return (
        <div>
            <header class="pr-2 md:w-2/3">{header}</header>
            <Tags />
        </div>
    )
}

export default Prefectures 