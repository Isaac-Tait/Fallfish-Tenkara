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
        <div class="bg-red-500 lg:flex lg:items-center lg:justify-between">
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/learning-japanese">{linkOne}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/tenkara-fishing-store">{linkTwo}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/keiryu-fishing-season">{linkThree}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/japanese-fishing-license">{linkFour}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/toll-roads">{linkFive}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/links">{linkSix}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/about">{linkSeven}</Link>
            </span>
            <span class="lg:text-xl lg:font-bold lg:text-white">
                <Link to="/tenkara-101">{linkEight}</Link>
            </span>
        </div>  
    );
};