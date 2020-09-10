import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation.js"
import Image from "gatsby-image"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div class="text-5xl font-serif font-bold">
        <Link to={`/`}>
          {title}
        </Link>
      </div>
    )
  } else {
    header = (
      <div class="text-5xl font-serif font-bold">
        <Link to={`/`}>
          {title}
        </Link>
      </div>
    )
  }
  return (
    <div class="flex flex-col">
      <Navigation />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © 2014 - {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://tailwindcss.com">TailwindCSS</a> 
      </footer>
    </div>
  )
}

export default Layout
