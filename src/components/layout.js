import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation.js"
import Slider from "../components/slider"
import Image from "gatsby-image"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/FfT_Logo_Desktop.png/"}) {
        childImageSharp {
          fixed(width: 535, height: 145) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (location.pathname === rootPath) {
    header = (
      <Image
        fixed={data.logo.childImageSharp.fixed}
        alt="Fallfish Tenkara"
      />
    )
  } else {
    header = (
        <Link to={`/`}>
          <Image
            fixed={data.logo.childImageSharp.fixed}
            alt="Fallfish Tenkara"
          />
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
      <div class="bg-red-500">
        <footer class="flex items-center justify-between">
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