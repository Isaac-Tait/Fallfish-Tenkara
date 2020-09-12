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
      mobileLogo: file(
        relativePath: { eq: "FfT_Logo_Mobile.png"}
        ) {
          childImageSharp {
            fluid(maxWidth: 550, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      desktopLogo: file(
        relativePath: { eq: "FfT_Logo_Desktop.png"}
      ) {
        childImageSharp {
          fluid(maxWidth: 550, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const source =[
    data.mobileLogo.childImageSharp.fluid,
    {
      ...data.desktopLogo.childImageSharp.fluid,
      media: `(min-width: 625px)`,
    }
  ]

  if (location.pathname === rootPath) {
    header = (
      <div class="mb-2 pt-2 pl-1 bg-gray-400 w-1/2">
        <Image fluid={source} alt="Fallfish Tenkara" />
      </div>
      
    )
  } else {
    header = (
        <Link to={`/`}>
            <Image fluid={source} alt="Fallfish Tenkara" />
        </Link>
    )
  }
  return (
    <div class="flex flex-col">
      <Navigation />
      <header>{header}</header>
      <Slider />
      <p class="text-3xl font-extrabold">Blog Posts</p>
      <main>{children}</main>
      <div class="bg-red-500 flex">
        <footer class="">
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
          <span class=""> --- Another 
          <a 
            href="https://www.mountaintopcoding.com"
            class="hover:text-white"
            target="_blank"  
            rel="noopener noreferrer" 
          > mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project</span>
        </footer>
      </div>
    </div>
  )
}

export default Layout
