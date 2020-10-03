import React from "react"

const Footer = () => {
    return (
        <div>
            <div class="bg-red-500">
                <footer class="flex items-center justify-between text-xs md:text-base">
                <div class="ml-2">
                    © 2014 - {new Date().getFullYear()}, Built with
                    {` `}
                    <a 
                    href="https://www.gatsbyjs.org"
                    class="hover:text-white"
                    target="_blank"  
                    rel="noopener noreferrer" 
                    > Gatsby</a> and 
                    <a 
                    href="https://tailwindcss.com"
                    class="hover:text-white"
                    target="_blank"  
                    rel="noopener noreferrer" 
                    > TailwindCSS</a>
                </div>

                <div>
                    <span class="ml-20 mr-2"> Another 
                    <a 
                        href="https://www.mountaintopcoding.com"
                        class="hover:text-white"
                        target="_blank"  
                        rel="noopener noreferrer" 
                    > mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
                    </span>
                </div>
                
                </footer>
            </div>
        </div>
    )
}

export default Footer

