import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Slider from "../components/slider"
import { GatsbyImage } from "gatsby-plugin-image";
import Footer from "../components/footer"
import Pagination from "../templates/blog-pagination"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 50
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
  mobileLogo: file(absolutePath: {regex: "/FfT_Logo_Mobile.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 250
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
}
`)

const logos = [
  data.mobileLogo.childImageSharp.gatsbyImageData,
  {
    ...data.desktopLogo.childImageSharp.gatsbyImageData,
    media: `(min-width: 768px)`
  }
]

  if (location.pathname === rootPath) {
    header = (
      <div class="ml-20 mr-20 mb-2">
        <GatsbyImage image={logos} alt="Fallfish Tenkara" />
      </div>
    )
  } else {
    header = (
      <div class="ml-20 mr-20 mb-2">
        <Link to={`/`}>
          <GatsbyImage image={logos} alt="Fallfish Tenkara" />
        </Link>
      </div>
        
    )
  }
  return (
    <div class="flex flex-col">
      <Navigation />
      <header class="pr-2 md:w-2/3">{header}</header>  
        <div class="hidden md:block w-2/3 mx-auto">
          <Slider />
        </div>
      <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
        <main>{children}</main>
        <Pagination />
      </div>
        <Footer />
    </div>
  )
}

export default Layout
