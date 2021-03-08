import React from "react"

import { Link } from "gatsby"

import { Highlight } from "react-instantsearch-dom";

const SearchPreview = ({ hit }) => {
    return (
        <div>
            <Link to={hit.fields.slug}>
                <Highlight hit={hit} attribute="frontmatter.title" tagName="mark" />
            </Link>

            <div class="">
                <Highlight hit={hit} attribute="excerpt" tagName="mark" />
            </div>
        </div>
    )
};

export default SearchPreview