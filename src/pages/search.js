import React, { useState } from "react"

import { autocomplete } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';

import SEO from "../components/seo.js"
import Navigation from "../components/navigation.js"
import Footer from "../components/footer.js"

const Search = () => {

    autocomplete({
        container: '#autocomplete',
        placeholder: 'Search for specific content you are interested in researching...',
        getSources() {
          return [];
        },
      });

    return (
        <div>
            <Navigation />
            <Link to="/" class="uppercase font-bold text-red-500">Take me back to the Home Page</Link>
        <div class="flex flex-col items-center justify-center">
            <SEO />
                <div class="max-w-md px-10 py-12">
                    <p class="pl-8 font-bold text-2xl">Content</p>
                </div>
                <div id="autocomplete"></div>
            </div>
            {posts.map(({ node }) => {
                const { excerpt } = node 

                const { slug } = node.fields
                const { tags, title, date, description } = node.frontmatter
    

                return (
                    <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
                        <article key={slug}>
                            <header>
                                <p class="pl-2 text-xl font-bold">
                                    <Link to={slug}>{title}</Link>
                                </p>

                                <p class="pl-2">{date}</p>

                                <p class="pl-4 text-gray-400 italic text-sm"># {tags}</p>

                                <p 
                                dangerouslySetInnerHTML={{
                                    __html: description || excerpt,
                                }}
                                class="pl-2 italic text-gray-700"
                                />
                            </header>
                        </article>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}

export default Search

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    id
                    frontmatter {
                        title
                        description
                        tags
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`