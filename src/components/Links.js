import React from "react"

function Links({user}) {

    return (
        <div>
            <a href={user.links.github}>https://github.com/liza"</a>
            <a href={user.links.linkedin}>https://www.linkedin.com/in/liza/</a>
        </div>
    )
}

export default Links