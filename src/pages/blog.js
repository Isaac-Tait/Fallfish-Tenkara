import React from "react"

import Footer from "../components/footer.js"
import BlogPosts from "../components/blogPosts"

const Blog = () => {
    return (
        <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
            <p>This page works....</p>
            <BlogPosts />
            <Footer /> 
        </div>
    )
}

export default Blog