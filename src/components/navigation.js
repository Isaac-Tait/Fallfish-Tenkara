import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
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
    `);

const { 
        linkOne,
        linkTwo,
        linkThree,
        linkFour,
        linkFive,
        linkSix,
        linkSeven,
        linkEight,
        } = data.site.siteMetadata

    return (
        <div>
            <p>
                <Link to="/learning-japanese">{linkOne}</Link>
                <Link to="/tenkara-fishing-store">{linkTwo}</Link>
                <Link to="/keiryu-fishing-season">{linkThree}</Link>
                <Link to="/japanese-fishing-license">{linkFour}</Link>
                <Link to="/toll-roads">{linkFive}</Link>
                <Link to="/links">{linkSix}</Link>
                <Link to="/about">{linkSeven}</Link>
                <Link to="/tenkara-101">{linkEight}</Link>
            </p>
        </div>  
    );
};