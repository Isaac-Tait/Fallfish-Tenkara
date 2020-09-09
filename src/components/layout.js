import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }} 
      >
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <p class="text-5xl font-mono font-bold">
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </p>
    )
  }
  return (
    <div class="flex flex-col">
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
