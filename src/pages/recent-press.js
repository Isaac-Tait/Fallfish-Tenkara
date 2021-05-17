import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Footer from "../components/footer.js"

const Press = ({ location }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 100
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
            <div class="w-2/3 mx-auto">
                <p class="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur semper lectus, at consequat dui pulvinar in. Pellentesque non molestie ligula. Phasellus cursus, nulla sit amet aliquet mollis, diam sapien tincidunt velit, nec scelerisque libero sapien et diam. Mauris tempor ante eu suscipit rhoncus. Sed non dolor non ipsum congue pulvinar. Phasellus fringilla eros in ipsum tempor, dapibus malesuada ligula varius. Vivamus sed dolor nec risus finibus vestibulum. Curabitur efficitur quam tellus, ut rutrum risus consequat id.</p>
                <p class="mt-2 mb-2">Suspendisse eget tempor erat, vitae eleifend velit. Suspendisse dui enim, aliquam sit amet aliquet a, faucibus eget ipsum. Ut rutrum pretium elit, eget aliquam tortor maximus sit amet. Nulla sollicitudin porttitor dolor a tempor. Pellentesque varius velit nec diam mollis, sit amet pharetra turpis pretium. Ut ac nunc sit amet sem molestie congue fermentum consectetur ante. Ut dictum nec odio vitae feugiat. Proin eu massa nec magna rhoncus laoreet. Morbi cursus vulputate nunc, a convallis libero facilisis at. Nulla metus est, accumsan eget tempor et, accumsan non nunc. In egestas ac quam vel laoreet.</p>
                
                <img class="w-8/12 rounded-lg shadow-lg mx-auto" src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/Black+Rifle+Coffee.jpg" alt="Sipping a great cup of coffee while contemplating the greater meaning of life..." />
                
                <p class="mt-2 mb-2">Morbi vitae interdum metus, eu semper nisi. Maecenas mattis non eros pellentesque imperdiet. Maecenas risus nisi, euismod sed nisi imperdiet, convallis feugiat nulla. Sed maximus varius molestie. Nam volutpat magna eu ipsum efficitur pellentesque. Nulla viverra ac elit egestas sollicitudin. Sed facilisis vulputate odio, eget malesuada ante. Pellentesque non metus mattis, molestie diam vitae, vehicula purus. Donec ullamcorper lectus id nunc suscipit venenatis. Nulla facilisi. Duis imperdiet tellus mauris, vel pellentesque mauris commodo id.</p>
                <p class="mt-2 mb-2">Pellentesque eget augue hendrerit, aliquet urna in, euismod lorem. Aenean iaculis tellus vitae augue egestas pharetra. Sed feugiat justo ex, nec sagittis nibh hendrerit in. Cras fermentum felis vitae laoreet fermentum. Aliquam volutpat tempor commodo. Donec tincidunt purus fermentum aliquam blandit. Proin et bibendum dui. Duis dignissim, nibh sit amet porta facilisis, quam libero tincidunt justo, sit amet semper lorem magna quis elit. Nunc nec diam quam. Vivamus porta finibus urna, a suscipit dui iaculis sit amet. Etiam egestas felis in diam congue, quis aliquam justo auctor. Vestibulum vitae sem elit. Sed at justo a ex tempor porta. In tincidunt dui at nisi rutrum, ac pretium felis sagittis.</p>
                <p class="mt-2 mb-2">Duis at sollicitudin erat. Mauris eu vehicula felis. Curabitur bibendum nunc dignissim justo tincidunt, id placerat nibh rutrum. Duis pellentesque dictum lacinia. Pellentesque est nisi, commodo ultrices aliquam sit amet, imperdiet eget dui. Nullam dapibus ipsum ac accumsan rhoncus. Ut ut pellentesque leo. Praesent neque felis, mattis eget lectus eget, sagittis vehicula eros. Sed dapibus fringilla nisl, sodales luctus elit egestas sed. Cras elit massa, aliquet vel lacinia ac, commodo sed ex. Sed eleifend nulla vel sagittis tristique. Nullam mollis justo nec enim tincidunt ornare. </p>  
            </div>

            <Footer />

        </div>
    )
};

export default Press