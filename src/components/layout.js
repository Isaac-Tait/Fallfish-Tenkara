import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation.js"
import Slider from "../components/slider"
import Image from "gatsby-image"

const Layout = ({ location, children }) => {
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
      <Image
        fluid={logos}        
        alt="Fallfish Tenkara"
      />
    )
  } else {
    header = (
        <Link to={`/`}>
          <Image
            fluid={logos}
            alt="Fallfish Tenkara"
          />
        </Link>
    )
  }
  return (
    <div class="flex flex-col">
      <Navigation />
      <header class="w-2/3 mb-2 ml-2">{header}</header>
      <Slider />
      <p class="text-3xl font-extrabold">Blog Posts</p>
      <main>{children}</main>
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

export default Layout
