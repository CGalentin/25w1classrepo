import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ArticlePreview({ title, author, summary}) {
    return (

        <Card 
        className="ArticlePreview"
        sx = {{marginBottom: 3, padding: 1.5, borderRadius: 2, boxShadow: 3, display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxWidth: 325, minHeight: 400}}>
            <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {author}
                </Typography>
                <Typography variant="body2">
                    {summary}
                </Typography>
            </CardContent>
        </Card>
        // <div className="ArticlePreview" style={{marginBottom: "24px"}}>
        //     <h2>{title}</h2>
        //     <p><strong>{author}</strong></p>
        //     <p>{summary}</p>
        // </div>
    )
}

export default ArticlePreview;