import React from "react"
import { Link } from "gatsby"

const Pager = ({ pageContext }) => {
    const { previousPagePath, nextPagePath } = pageContext;

    return (
        <div>
            <div>
                {previousPagePath && (
                    <span>
                        <Link to={pageContext.previousPagePath}>Previous</Link>
                    </span>
                )}
                {nextPagePath && (
                    <span>
                        <Link to={pageContext.nextPagePath}>Next</Link>
                    </span>
                )}
            </div>
        </div>
    )
}

export default Pager
