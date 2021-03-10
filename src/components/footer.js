import React from "react"

const Footer = () => {
    return (
        <div class="bg-red-500">
            <footer class="text-tiny md:text-base flex items-center justify-between">
                <div class="ml-2">
                    <p>© 2014 - {new Date().getFullYear()}, Built with&nbsp;
                        <a href="https://www.gatsbyjs.org" class="hover:text-white" target="_blank" rel="noopener noreferrer">Gatsby</a> &&nbsp;
                        <a  href="https://tailwindcss.com" class="hover:text-white" target="_blank" rel="noopener noreferrer">TailwindCSS</a>.
                    </p>
                </div>
                <div class="">
                    <p>A&nbsp;
                        <a href="https://www.mountaintopcoding.com"class="hover:text-white" target="_blank" rel="noopener noreferrer">mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
                    </p>
                </div>   
            </footer>
        </div>
    )
}

export default Footer

