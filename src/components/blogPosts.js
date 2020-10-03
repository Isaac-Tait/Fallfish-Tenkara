import React from "react"

import SEO from "../components/seo"

const BlogPosts = (props) => {
    return (
        <div>
            <SEO />
            <main>{props.children}</main>
        </div>
    )
} 

export default BlogPosts