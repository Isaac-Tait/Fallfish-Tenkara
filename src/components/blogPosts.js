import React from "react"
import Pagination from "../templates/blog-pagination"

import SEO from "../components/seo"

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