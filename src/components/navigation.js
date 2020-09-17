import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";

import {
    ProSidebar,
    Menu,
    MenuItem, SubMenu
  } from 'react-pro-sidebar';

import { 
    GiSharpShuriken, 
    GiBamboo, 
    GiRiver, 
    GiBoatFishing, 
    GiPoliceCar, 
    GiBonsaiTree, 
    GiDiplodocus, 
    GiCampingTent, 
    GiFishing 
} from "react-icons/gi"

const Navigation = ({ collapsed, toggled, handleToggleSidebar }) => {

            const data = useStaticQuery(graphql`
            query {
                site{
                    siteMetadata {
                        title
                        menuLinks {
                            name
                            link
                        }
                        linkOne
                        linkTwo
                        linkThree
                        linkFour
                        linkFive
                        linkSix
                        linkSeven
                        linkEight
                        linkNine
                            menuLinks {
                                link
                                name
                            }
                    }
                }
            }
        `)

        const linkOne = data.site.siteMetadata.linkOne 
        const linkTwo = data.site.siteMetadata.linkTwo
        const linkThree = data.site.siteMetadata.linkThree
        const linkFour = data.site.siteMetadata.linkFour
        const linkFive = data.site.siteMetadata.linkFive
        const linkSix = data.site.siteMetadata.linkSix
        const linkSeven = data.site.siteMetadata.linkSeven
        const linkEight = data.site.siteMetadata.linkEight
        const linkNine = data.site.siteMetadata.linkNine

        return (
            <ProSidebar
                collapsed={collapsed}
                toggled={toggled}
                onToggle={handleToggleSidebar}
            >
                <button type="button">
                    <svg class="h-6 w-6 fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" 
                            fill="#db132e"
                        />
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z" 
                            fill="#db132e"
                        />
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z" 
                            fill="#db132e"
                        />
                    </svg>
                </button>

                <div class="bg-red-500 mb-2 flex flex-col">
                    {/*https://react-icons.github.io/react-icons/icons?name=gi*/}
                <Menu>
                    <MenuItem icon={<GiSharpShuriken />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/learning-japanese">{linkOne}</Link>
                        </SubMenu> 
                    </MenuItem>        

                    <MenuItem icon={<GiBamboo />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/tenkara-fishing-store">{linkTwo}</Link>
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiRiver />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/keiryu-fishing-season">{linkThree}</Link>
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiBoatFishing />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/japanese-fishing-license">{linkFour}</Link>
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiPoliceCar />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/toll-roads">{linkFive}</Link>
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiBonsaiTree />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/links">{linkSix}</Link>
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiDiplodocus />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/about">{linkSeven}</Link>
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiCampingTent />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/tenkara-101">{linkEight}</Link>  
                        </SubMenu>
                    </MenuItem>

                    <MenuItem icon={<GiFishing />} class="ml-2">
                        <SubMenu class="mt-2">
                            <Link to="/search">{linkNine}</Link>
                        </SubMenu>
                    </MenuItem>
                </Menu>

                    {/*class="mt-1 px-2 block text-white hover:text-black lg:text-lg lg:font-bold lg:text-white lg:hover:text-red-500 lg:hover:bg-white"*/}

                </div>
            </ProSidebar>  
        )
} 

export default Navigation
