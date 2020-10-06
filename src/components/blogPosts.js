import React from "react"
//import { useStaticQuery, Link } from "gatsby"

import SEO from "../components/seo"

const BlogPosts = ({ children }) => {
    return (
        <div>
            <SEO />
            <div>
                <p>Blog Posts </p>
            </div>
            <p>A list of blog posts: {children}</p>
        </div>
    )
} 

export default BlogPosts