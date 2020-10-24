import React from "react"

import SEO from "../components/seo"
import Pagination from "../templates/blog-pagination"

const BlogPosts = ({ children }) => {
    return (
        <div>
            <SEO />
            <div>
                <p>Blog Posts </p>
            </div>
            <p>A list of blog posts: {children}</p>
            <Pagination />
        </div>
    )
} 

export default BlogPosts