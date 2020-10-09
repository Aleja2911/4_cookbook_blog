import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from 'react-bootstrap/CardDeck';
import BlogEntryPreview from "./BlogEntryPreview"

const BlogEntryPreviews = ({blogData}) => {
    return(
    
        <Container>
             <CardDeck>
                    {blogData && blogData.map((preview, index) => (
                <BlogEntryPreview  preview={preview}  key={index}/>
                ))}     
             </CardDeck>    
        </Container>


    )
}

export default BlogEntryPreviews;