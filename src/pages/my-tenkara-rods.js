import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const TenkaraRods = ({ location }) => {
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
                <div>
                    <p>I have fished Tenkara with several rods. I like each one for different reasons, but I wanted to see how they stack up against each other. So I compiled an experiment similar to Tenkara Bum’s Common Cents Database or Teton Tenkara’s Rod Flex Index. My intent was to compile test results that were simple and not dependent on the rod length for accurate results.</p>
                    <p>First I placed the rods at a fixed height of 71.75” I only braced the rods at the handle – to allow full rod flex. The rods had their own natural flex which I measured (and rounded to the nearest 1/4 of an inch). Next I attached a 20 gram weight to the lilian. My intent was determine the action of the rods when compared against each other. The lower the “Flex Percentage” number the stiffer the rod is; conversely the higher the “Flex Percentage” number is the softer the rod is. The list is organized from stiffest to softest.</p>
                    <img class="w-8/12 rounded-lg shadow-lg mx-auto" src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/FfT_Rod_Flex_Sketch.jpg" alt="Fallfish Tenkara Flex Percentage diagram" />
                    <p>Here are my results:</p>

                    <p>Numbers</p>

                    <p class="mt-2 mb-2">Two Piece Yamano Bamboo Rod
                    262cm
                    Weight-72 grams
                    Natural Flex rod dropped 6.25″
                    Flex Percentage = 22.9%</p>

                    <p class="mt-2 mb-2">Four Piece Yamano Bamboo Rod
                    279cm
                    Weight-151 grams
                    Natural Flex dropped 5.75″
                    Flex Percentage = 23.9%</p>

                    <p class="mt-2 mb-2">Patagonia Temple Fork Outfitters
                    320cm
                    Weight-72 grams
                    Natural Flex rod dropped 3.75″
                    Flex Percentage = 24.26%</p>

                    <p class="mt-2 mb-2">Tenkara Rod Co. Sawtooth
                    360cm
                    Weight-91 grams
                    Natural Flex rod dropped 6”
                    Flex Percentage = 32.31%</p>

                    <p class="mt-2 mb-2">万能超小継  流心 450H
                    450cm
                    Weight-160 grams
                    Natural flex rod dropped 11.75″
                    Flex Percentage = 32.50%</p>

                    <p class="mt-2 mb-2">Dragontail Shadowfire
                    360cm
                    Weight-84 grams
                    Natural flex rod dropped 5”
                    Flex Percentage = 37.07%</p>

                    <p class="mt-2 mb-2">Badger Tenkara WISCO
                    412cm
                    Weight-129 grams
                    Natural flex rod dropped 6”
                    Flex Percentage = 38.00%</p>

                    <p class="mt-2 mb-2">Karasu 360 
                    354cm
                    Weight-80 grams
                    Natural Flex rod dropped 5.25″
                    Flex Percentage = 39.25%</p>

                    <p class="mt-2 mb-2">Badger Classic
                    360cm
                    Weight-91 grams
                    Natural flex rod dropped 8”
                    Flex Percentage = 40.39%</p>

                    <p class="mt-2 mb-2">Tenryu Furaibo TF39TA
                    Weight-76.9 grams

                    324cm
                    7.25” natural flex
                    Flex Percentage = 41.1%

                    350cm
                    8.5” natural flex
                    Flex Percentage = 37.55%

                    373cm
                    9” natural flex
                    Flex Percentage = 33.9%</p>

                    <p class="mt-2 mb-2">Nissin ProSquare Mulch テンカラ II 360
                    360cm
                    Weight-61 grams
                    Natural flex rod dropped 6.75″
                    Flex Percentage = 41.54%</p>

                    <p class="mt-2 mb-2">Tenkara USA Ito Zoom Rod
                    390cm
                    Weight-106 grams
                    Natural flex rod dropped 6.75”
                    Flex Percentage = 62.10%
                    Extended Length 445cm
                    Natural flex rod dropped 8.75”
                    Flex Percentage = 58.50%</p>

                    <p class="mt-2 mb-2">弦渓流 54 硬調 Hit Wave
                    Gen-Keiryu 54 High Contrast Hit Wave
                    540cm
                    Weight-236 grams
                    Natural flex rod dropped 11.75”
                    Flex Percentage = 65.00%</p>
                </div>
            <Footer />
        </div>
    )
};

export default TenkaraRods