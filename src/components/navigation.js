import React from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout"

const Navigation = () => { 
    siteTitle = data.siteMetaData.title
    linkOne = data.siteMetaData.linkOne
    linkTwo = data.siteMetaData.linkTwo
    linkThree = data.siteMetaData.linkThree
    linkFour = data.siteMetaData.linkFour
    linkFive = data.siteMetaData.linkFive
    linkSix = data.siteMetaData.linkSix
    linkSeven = data.siteMetaData.linkSeven
    linkEight = data.siteMetaData.linkEight

    return (
        <Layout location={location} title={siteTitle}>
            <p>{siteTitle}</p>
                <Navigation>
                    <Link to="/learning-japanese">{linkOne}</Link>
                    <Link to="/tenkara-fishing-store">{linkTwo}</Link>
                    <Link to="/keiryu-fishing-season">{linkThree}</Link>
                    <Link to="/japanese-fishing-license">{linkFour}</Link>
                    <Link to="/toll-roads">{linkFive}</Link>
                    <Link to="/links">{linkSix}</Link>
                    <Link to="/about">{linkSeven}</Link>
                    <Link to="/tenkara-101">{linkEight}</Link>
                </Navigation>
        </Layout>  
    )
}

export default Navigation

export const pageQuery = graphql`
    query {
        site{
            siteMetadata {
                siteTitle
                linkOne
                linkTwo
                linkThree
                linkFour
                linkFive
                linkSix
                linkSeven
                linkEight
                    menuLinks {
                        link
                        name
                    }
            }
        }
    }
`