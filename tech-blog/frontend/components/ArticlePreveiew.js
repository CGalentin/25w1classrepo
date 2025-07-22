import React from "react";

function ArticlePreview({ title, author, summary}) {
    return (
        <div className="ArticlePreview" style={{marginBottom: "24px"}}>
            <h2>{title}</h2>
            <p><strong>{author}</strong></p>
            <p>{summary}</p>
        </div>
    )
}

export default ArticlePreview;