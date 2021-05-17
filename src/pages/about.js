import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const About = ({ location }) => {
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
        <div >
            <Navigation />
            <header class="pr-2 pb-4 md:w-2/3">{header}</header>
              <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
                <p class="ml-2 mb-4">I created Fallfish Tenkara to be a compilation of stories, information, and adventures inspiration for the English speaking individual planning an adventure (of any kind) to Japan. While the stories and information have a strong Tenkara orientation I have attempted to make the content appeal to all types of outdoor aficionados.</p>
                <p class="ml-2 mb-4">If you have not given Tenkara a try I recommend that you do. Tenkara has shown me a world, and given me new friendships, that would have remained undiscovered and unexperienced. You can learn Tenkara anywhere – it is a simple, easy, effective, and inexpensive method of fly fishing. I learned Tenkara in the riparian rivers of Maryland and West Virginia, the alpine streams of the Sierra Nevada, and the warm and clear rivers flowing through the karst hill country of Texas. I refined my tenkara craft deep in the Japanese mountains in the crystal clear, cold, and magnificent keiryu (mountain streams).</p>
                <p class="ml-2 mb-4">There is a simple joy that can only be found when you are out and about in Creation with only the simplest of instruments – a Tenkara rod. Through Fallfish Tenkara I am striving to make that joy as real and tangible as possible, and hopefully inspire others to seek it out in their life. So, what are you waiting for? Grab a Tenkara rod and come visit the wonderful, diverse, and lovely country of Japan.</p>
                <p class="ml-2 mt-4">See you on the river!</p>

                <div class="w-2/3 mx-auto mt-2">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/EDhEnS7-xa4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <p class="ml-2 mt-4 font-semibold">Check out my <a href="https://www.fallfishtenkara.com/my-tenkara-rods" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white"> tenkara rods</a> for a breakdown of the rods I used in Japan.</p>
                <p class="ml-2 mt-4 font-semibold">Be sure to take a look at my vitae of <a href="https://www.fallfishtenkara.com/recent-press" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">Recent Press</a>.</p>
              </div>
            
              <div class="bg-white text-center">
                <p class="text-4xl mt-10 bg-red-500 w-full text-white">Contact</p>
                <a 
                    class="mr-4 external link font-bold text-red-500 hover:bg-red-500 hover:text-white"
                    href="mailto:isaac@mountaintopcoding.com?subject=I%20am%20contacting%20you%20through%20Fallfish%20Tenkara%20&body=Hi%20Isaac,"
                    rel="noopener noreferrer"
                >Email </a>
                <a 
                    class="mr-4 ml-4 external link font-bold text-red-500 hover:bg-red-500 hover:text-white"
                    href="https://twitter.com/Isaac_Tait_83"
                    target="_blank" 
                    rel="noopener noreferrer"
                >Twitter </a>
                <a 
                    class="ml-4 external link font-bold text-red-500 hover:bg-red-500 hover:text-white"
                    href="https://github.com/Isaac-Tait"
                    target="_blank"  
                    rel="noopener noreferrer"
                >GitHub</a>
            </div>
            <Footer />
        </div>
    )
}

export default About