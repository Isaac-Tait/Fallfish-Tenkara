import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const Season = ({ location }) => {
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

            <p class="">Most Japanese keiryu and genryu (mountain streams) are closed (aka no fishing) from October 1st until the end of February. The closure coincide with spawning season and also help to protect the fisheries while there isn’t an abundant food supply. Occasionally certain regions closure schedule varies though – for example:</p>
            <p class="">Some streams in the Tanzawa Mountains are open till October 15th.</p>
            <p class="">Oshino does not open until March 15th.</p>
            <p class="">Rivers in Nagano Prefecture open on February 16th.</p>
            <p class="">Rivers on Izu Peninsula do not close until November 1st.</p>
            <p class="">If the river you want to fish is open make sure you have a Japanese Fishing License.</p>
            <p class="">There are a few options though if you want to fish in the off season as there are numerous “fish farms” that are open year around and stocked with hundreds if not thousands of fish (like this one). However, you typically have to pay upwards of $35 a day to fish at these places.</p>
            <p class="">Also warm water rivers that aren’t able to support trout due to water temperature can be fished year around. I’ve seen many anglers on the Tama River and the Sagami River during the winter months when the keiryu and genryu are closed. The fish in these types of river tend to be bass, carp, and zatsugyo.</p>
        </div>
    )
}

export default Season