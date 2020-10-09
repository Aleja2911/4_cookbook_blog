import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const BlogDetail = ({blogData}) => {


    return (


   <Container>
    <Row>
    <Col>Logo</Col>
    <Col>Nav Bar </Col>
    <Col>SearchBar </Col>

    <Row>Hero Image</Row>
    <Row>
        Content
    </Row>

    </Row>
        
   </Container>

    )
}

export default BlogDetail;