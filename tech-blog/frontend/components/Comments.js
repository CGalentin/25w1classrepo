import React from "react";

function Comments({ comments }) {
    return (
        <ul className="Comments">
            {comments.map((text, index) => (
                <li key={index}>{text}</li>
            ))}
        </ul>
    )
}

export default Comments;