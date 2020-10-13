import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";



const BlogDetailTemplate = ({newBlogs, blogData}) => {

    const {title, author, blogContent, heroImage, publishDate, tags  } = blogData.fields;


    return (
   
  
        <Container>
            <Row>
                <Col>Logo</Col>
                <Col>Nav Bar </Col>
                <Col>SearchBar </Col>

            <Row> {heroImage} </Row>
        {blogData && blogData.map((blogTemplate, index) => (
            <Row blogTemplate={blogTemplate} key={index}> 

                <h1> {title} </h1> 
                <p>{author.fields.name} - {publishDate} </p>
                <p> {blogContent} </p>
                <p>{tags}</p>

            </Row>
            ))}
            
            </Row>
        </Container>


    )

}

export default BlogDetailTemplate;