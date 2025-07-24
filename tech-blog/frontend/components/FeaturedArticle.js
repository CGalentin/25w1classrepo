import React from "react";
import "../styles/FeaturedArticle.css"

function FeaturedArticle ({ title, author, summary, highlight }) {
    if (!highlight) return null; //Conditional Rendering

    return (
        <section className="FeaturedArticle">
            <h2>Featured Article</h2>
            <h3> {title} </h3>
            <p><strong>By:</strong> {author} </p>
            <p>{summary}</p>
        </section>
    )
}

export default FeaturedArticle;