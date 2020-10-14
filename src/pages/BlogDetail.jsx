import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const BlogDetail = ({ blogData }) => {
	const { slug } = useParams();

	// const {
	// 	title,
	// 	author,
	// 	blogContent,
	// 	heroImage,
	// 	publishDate,
	// 	tags,
	// } = blogData.fields;

	return (

		<Container>
			{blogData.length >= 1 &&
							blogData
		.filter((newBlog) => newBlog.fields.slug === slug)
		.map((newBlog) => (
			<Row>
				<Col>
					<Row>
						<h1> {newBlog.fields.title} </h1>
					</Row> 
					<Row>
						<img width="45%" src={newBlog.fields.heroImage.fields.file.url} alt="cheese and grapes"/>
					</Row>
					<Row>
						<p> {newBlog.fields.author.fields.name} </p>
					</Row>
					<Row>
						<p> {newBlog.fields.publishDate} </p>
						<p> {newBlog.fields.blogContent} </p>  
						<img width="45%" src={newBlog.fields.blogEntryImage.fields.file.url} alt="cheese board"/> 
					</Row>
					<Row>
						<p>{newBlog.fields.tags}</p>
					</Row>
				</Col>
			</Row>
		))}
		
		</Container>

	
	)
}

export default BlogDetail;

