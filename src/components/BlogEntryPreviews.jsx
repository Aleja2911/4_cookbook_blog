import React from "react";
import Container from "react-bootstrap/Container";
import CardGroup from 'react-bootstrap/CardGroup';
import BlogEntryPreview from "./BlogEntryPreview"

const BlogEntryPreviews = ({blogData}) => {
    return(
    
    <Container>
             <CardGroup>
                    {blogData && blogData.map((preview, index) => (
                <BlogEntryPreview  preview={preview}  key={index}/>
                ))}     
             </CardGroup>    
    </Container> 
    )
}

export default BlogEntryPreviews;