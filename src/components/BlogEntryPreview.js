import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";





const BlogEntryPreview = ({preview}) => {

const {  title, blogShortDescription , publishDate, blogEntryImage, author, slug} = preview.fields;

return (

<Link to={`/blog/${slug}`}>
     <Card> 
        <Card.Img  
					variant="top"
                    width="20%"
					src={blogEntryImage.fields.file.url}
					alt="Card image cap"
				/>
        <Card.Body>
            <Card.Title> {title} </Card.Title> 
            <Card.Text> {author.fields.name} </Card.Text>
             <Card.Text> {publishDate} </Card.Text>
            <Card.Text> {blogShortDescription}</Card.Text>
        </Card.Body>      
     </Card>
</Link>      
)

}

export default BlogEntryPreview;


