import React from "react"

import { Link } from "gatsby"

import { Highlight } from "react-instantsearch-dom";

const SearchPreview = ({ hit }) => {
    return (
        <div>
            <Link to={hit.fields.slug}>
                <Highlight hit={hit} attribute="title" tagName="mark" />
            </Link>

            <p dangerouslySetInnerHTML={{__html: hit.frontmatter.title && hit.frontmatter.description || hit.excerpt,}}/>

            <div class="font-semibold text-red-500">
                <Highlight hit={hit} attribute="excerpt" tagName="mark" />
            </div>
        </div>
    )
};

export default SearchPreview