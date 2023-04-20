import React from "react";

function Links (props) {
    return (
        <>
            <h3>Links</h3>
            <a href="github">{props.github}</a>
            <br></br>
            <a href="#linkedin">{props.linkedin}</a>
        </>
    )
}

export default Links;