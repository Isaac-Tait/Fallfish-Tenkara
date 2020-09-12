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
      logo: file(absolutePath: { regex: "/FfT_Logo.png/"}) {
        childImageSharp {
          fixed(width: 550) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (location.pathname === rootPath) {
    header = (
      <div class="mb-2 pt-2 pl-1 bg-gray-400 w-1/2">
        <Image
          fixed={data.logo.childImageSharp.fixed}
          alt="Fallfish Tenkara"
          imgStyle={{

          }}
        />
      </div>
      
    )
  } else {
    header = (
        <Link to={`/`}>
            <Image
            fixed={data.logo.childImageSharp.fixed}
            alt="Fallfish Tenkara"
            // imgStyle={{
            //   minWidth: 500,
            //   paddingLeft: `2px`,
            // }}
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
          <span class="ml-20"> --- Another 
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
