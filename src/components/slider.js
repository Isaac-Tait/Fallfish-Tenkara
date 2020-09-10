import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

function Slider() {
    const [index, setIndex] = useState(0)
    const { allFile } = useStaticQuery(
        graphql`
        query {
            allFile(
                sort: { fields: name, order: DESC }
                filter: { relativeDirectory: { eq: "sliders" }}
                ) {
                  edges {
                      node {
                          id
                          name
                          childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }  
    `)

    const length = allFile.edges.length - 1
    const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
    const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
    const { node } = allFile.edges[index]

    return (
        <div>
            <div>
                <Image 
                    fluid={node.childImageSharp.fluid}
                    key={node.id}
                    alt="Slider Images"
                />
            </div>
            <div>
                <button onClick={() => handlePrevious()}>Previous</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
};

export default Slider