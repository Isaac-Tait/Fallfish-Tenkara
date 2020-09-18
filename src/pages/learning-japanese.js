import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const Japanese = ({ location }) => {
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
            <Navigation />
            <header class="pr-2 md:w-2/3">{header}</header>
            
            <p class="">I launched this page in conjunction with my third article for Tenkara Angler “Conversing In Japanese” to help those on the journey of learning Japanese. I have been studying the Japanese language since the Fall of 2015.</p>
            <p class="">Without further ado I have compiled this list of helpful resources for those learning Japanese. If you have any questions or would like to add a resource to the list please do not hesitate to contact me.</p>
            <p class="">A list of helpful mobile phone applications can be found here (in particular I am a huge fan of Tae Kim’s Guide to Learning Japanese scroll down to David W. comments</p>
            <p class="">The Tenkara Word Bank is an excellent resource. I have saved it to my offline Evernote notebook “Tenkara” for reference when away from cell reception/wi-fi.</p>
        </div>
    )
}

export default Japanese