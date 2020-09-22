import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const Links = ({ location }) => {
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
            <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl"> 
            <p class="ml-2 mb-4">A locals website with all sorts of info on fish and rivers within Japan</p>
            <p class="ml-2 mb-4">Toll Calculator for Drivers in Japan (Hint: it is all in Japanese so I suggest having Google Maps open in another tab so that you can compare)</p>
            <p class="ml-2 mb-4">Information on ETC Pass for foreigners Japan ETC Toll Roads Pass</p>
            <p class="ml-2 mb-4">Timetable and Route info for Trains in Japan</p>
            <p class="ml-2 mb-4">They drive small cars in Japan and who wants to lug huge packs on and off a train during rush-hour? Ship your gear and save the hassle </p>
          </div>
          <div class="bg-red-500">
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
}

export default Links