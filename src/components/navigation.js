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
        <div class="lg:flex lg:items-center lg:justify-between">
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/learning-japanese">{linkOne}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/tenkara-fishing-store">{linkTwo}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/keiryu-fishing-season">{linkThree}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/japanese-fishing-license">{linkFour}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/toll-roads">{linkFive}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/links">{linkSix}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/about">{linkSeven}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-gray-600">
                <Link to="/tenkara-101">{linkEight}</Link>
            </span>
        </div>  
    );
};