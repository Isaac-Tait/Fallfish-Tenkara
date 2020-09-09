import React from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout"

const Navigation = () => { 
    siteTitle = data.site.siteMetaData.title
    linkOne = data.site.siteMetaData.linkOne
    linkTwo = data.site.siteMetaData.linkTwo
    linkThree = data.site.siteMetaData.linkThree
    linkFour = data.site.siteMetaData.linkFour
    linkFive = data.site.siteMetaData.linkFive
    linkSix = data.site.siteMetaData.linkSix
    linkSeven = data.site.siteMetaData.linkSeven
    linkEight = data.site.siteMetaData.linkEight

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