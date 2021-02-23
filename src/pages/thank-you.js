import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Footer from "../components/footer.js"
import Bio from "../components/bio"
import Navigation from "../components/navigation"

const ThankYouPage = ({ location, children }) => {
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
        <div class="flex flex-col">
            <Navigation />
            
            <header class="pr-2 md:w-2/3">{header}</header>  

            <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
                <main>{children}</main>  
            </div>
        <p class="font-bold text-center text-red-500">Your comment has been registered.</p>
        <p class="italic font-semibold text-center mb-4">Thank you for your submission. Once it has been approved it will be posted for the whole world to read.</p>
        
        <hr />

        <div class="mt-4">
            <Bio />
        </div>
        
        <Footer />
    </div>
    )
};

export default ThankYouPage