import React from "react"

import SEO from "../components/seo"

const BlogPosts = ({ children }) => {
    return (
        <div>
            <SEO />
            <p>{children}</p>
        </div>
    )
} 

export default BlogPosts