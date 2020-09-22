import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const License = ({ location }) => {
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
              <p class="ml-2 mb-4">Obtaining a fishing license (aka hituri ken – 日釣 券 ) in Japan can be easy, as long as you know how to go about acquiring one.</p>
              <p class="ml-2 mb-4">First make sure the river is actually open for fishing. For more information seeing Keiryu Fishing Season.</p>
              <p class="ml-2 mb-4">Next you need to find the place to acquire your hituri ken. Sometimes they are sold at convenience stores other times you buy them from a co-op volunteers home.</p>
              <p class="ml-2 mb-4">Keep your eyes peeled for a yellow flag called yūryōken hanbaisyo (遊漁券 販売所).</p>
              <p class="ml-2 mb-4">Before purchasing a hituri ken you need to make sure it is for the section of the river you want to fish. Often times a river can be “owned” by several co-ops or Fisheries Cooperative Associations (aka 内水面漁業協同組合). For each section of the river you will need to buy a separate hituri ken.</p>
              <p class="ml-2 mb-4">A hituri ken typically cost anywhere from ¥500 – ¥4,400 per person per day and often have a restriction on how many fish you can keep.</p>     
              <p class="ml-2 mb-4">Only rivers that are stocked by Fisheries Cooperative Association require a hituri ken. If you are fishing genryu and keiryu deep in the mountains you typically do not need one.</p>
              <p class="ml-2 mb-4">If you are supposed to have a hituri ken but do not know where to purchase one, do not despair often times you can buy them on the spot when asked by a volunteer.</p>
              <p class="ml-2 mb-4">Helpful sites: 
                <a 
                  href="https://www.tsuritickets.com/manual" 
                  target="_blank" rel="noopener noreferrer"
                  class="ml-4 external link font-bold text-red-500 hover:bg-red-500 hover:text-white"
                >Tsuri Tickets</a> and 
                <a 
                  href="https://www.satofull.jp/products/detail.php?product_id=1001064" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="ml-4 external link font-bold text-red-500 hover:bg-red-500 hover:text-white"
                >Satofull</a></p>
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

export default License