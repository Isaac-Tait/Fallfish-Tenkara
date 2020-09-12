import React, {Component} from "react"
import { useStaticQuery, Link, graphql } from "gatsby";
import { render } from "react-dom";
// import { render } from "react-dom";

class Navigation extends Component {
    constructor() {
        super()
        this.setState = {
            dropdownOpen: false
        }
    }
}

toggle()
    this.setState(prevState => ({
        dropdownButton: !prevState.dropdownOpen
    }))
        
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
`)

    render() 
        return (
            <div class="bg-red-500 mb-2 lg:flex lg:items-center lg:justify-between">
                <button isOpen={this.state.dropdownOpen} toggle={this.toggle} class="block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M4 6H20M4 12H20M4 18H20" 
                            stroke="#ffffff" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
    
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:m-2 lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/learning-japanese">{linkOne}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/tenkara-fishing-store">{linkTwo}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/keiryu-fishing-season">{linkThree}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/japanese-fishing-license">{linkFour}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/toll-roads">{linkFive}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/links">{linkSix}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/about">{linkSeven}</Link>
                </span>
                <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:mr-2 lg:text-lg lg:font-bold lg:text-white">
                    <Link to="/pages/tenkara-101">{linkEight}</Link>
                </span>
            </div>  
        )

export default Navigation
        