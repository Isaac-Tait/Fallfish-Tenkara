import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo.js"
import Navigation from "../components/navigation.js"

const Search = props => {
    const { data } = props
    const allPosts = data.allMarkdownRemark.edges

    const emptyQuery = ""

    const [ state, setState ] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInput = event => {
        const query = event.target.value
        const { data } = props

        // this is how we get all of our posts   
        const posts = data.allMarkdownRemark.edges || []

        // return all filtered posts   
        const filteredData = posts.filter(post => {
            // de-structure data from post frontmatter
            const { title, description } = post.node.frontmatter
            return (
                // standardize data with .toLowerCase()
                // return true if the description, title or tags
                // contains the query string 
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) 
            )
        })
        // update state according to the latest query and results
        setState({
            query, //with current query string from the 'Input' event
            filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
        })
    }

    const { filteredData, query } = state

    const hasSearchResults = filteredData && query !== emptyQuery

    const posts = hasSearchResults ? filteredData : allPosts

    return (
        <div>
            <SEO />
            <Navigation />
            <Link to="/" class="uppercase font-bold">Home</Link>
            <p class="font-bold text-2xl">Articles</p>
            <input
                class="bg-gray-400 text-white ml-2" 
                type="text"
                aria-label="Search"
                placeholder="Type to filter posts..."
                onChange={handleInput}
            />
            {posts.map(({ node }) => {
                const { excerpt } = node 

                const { slug } = node.fields
                const { title, date, description } = node.frontmatter
    

                return (
                    <article key={slug}>
                        <header class="pl-2 text-xl">
                            <p>
                                <Link to={slug}>{title}</Link>
                            </p>

                            <p>{date}</p>
                        </header>
                        <section>
                            <p 
                            dangerouslySetInnerHTML={{
                                __html: description || excerpt,
                            }}
                            class="pl-4 italic text-gray-700"
                            />
                        </section>
                        <hr />
                    </article>
                )
            })}
        </div>
    )
}

export default Search

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
                node {
                    excerpt
                    id
                    frontmatter {
                        title
                        description
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
