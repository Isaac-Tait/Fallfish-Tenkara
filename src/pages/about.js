import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const About = ({ location }) => {
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
        absolutePath: { regex: "/FfT_Logo_Desktop.png/"}
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
        <div class="">
            <Image
            fluid={logos}        
            alt="Fallfish Tenkara"
            />
        </div>
        )
    } else {
        header = (
        <div class="">
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
            <header>{header}</header>

            <p class="">I created Fallfish Tenkara to be a compilation of stories, information, and adventures inspiration for the English speaking individual planning an adventure (of any kind) to Japan.While the stories and information have a strong Tenkara orientation I have attempted to make the content appeal to all types of outdoor aficionados.</p>
            <p class="">If you haven’t given Tenkara a try I recommend that you do. Tenkara has shown me a world, and given me new friendships, that would have remained undiscovered and unexperienced. You can learn Tenkara anywhere – it is a simple, easy, effective, and inexpensive method of fly fishing. I learned Tenkara in the riparian rivers of Maryland and West Virginia, the alpine streams of the Sierra Nevada, and the warm and clear rivers flowing through the karst hill country of Texas. Now I fish the magnificent keiryu (mountain streams) of Japan.</p>
            <p class="">There is a simple joy that can only be found when you are out and about in Creation with only the simplest of instruments – a Tenkara rod.Through Fallfish Tenkara I am striving to makeÂ that joy as real and tangible as possible, and hopefully inspire others to seek it out in their life. So what are you waiting for? Grab a Tenkara rod and come visit the wonderful, diverse, and lovely country of Japan.</p>
            <p class="">See you on the river!</p>
        </div>
    )
}

export default About