import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Japanese = ({ location }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 50
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  mobileLogo: file(absolutePath: {regex: "/FfT_Logo_Mobile.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 250
        quality: 100
        placeholder: TRACED_SVG
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
        <div>
            <Navigation />
            <header class="pr-2 md:w-2/3">{header}</header>
            <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
              <p class="ml-2 mb-4">I launched this page in conjunction with my third article for Tenkara Angler “Conversing In Japanese” to help those on the journey of learning Japanese. I have been studying the Japanese language since the Fall of 2015.</p>
              <p class="ml-2 mb-4">Without further ado I have compiled this list of helpful resources for those learning Japanese. If you have any questions or would like to add a resource to the list please do not hesitate to contact me.</p>
              <p class="ml-2 mb-4">A list of helpful mobile phone applications can be found here (in particular I am a huge fan of Tae Kim’s Guide to Learning Japanese scroll down to David W. comments</p>
              <p class="ml-2 mb-4">The Tenkara Word Bank is an excellent resource. I have saved it to my offline Evernote notebook “Tenkara” for reference when away from cell reception/wi-fi.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Japanese