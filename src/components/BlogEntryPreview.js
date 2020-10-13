import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const BlogEntryPreview = ({ preview }) => {
	const {
		title,
		blogShortDescription,
		publishDate,
		blogEntryImage,
		author,
		slug,
	} = preview.fields;

	return (
		<Link to={`/blog/${slug}`}>
			<Accordion defaultActiveKey="0">
				<Card
					className="blogPreviewCard"
					text={"light" ? "dark" : "white"}
				>
					<Accordion.Toggle as={Card.Header} eventKey="1">
						<Card.Title> {title} </Card.Title>
						<Card.Text> {publishDate} </Card.Text>
					</Accordion.Toggle>
					<Card.Img
						variant="top"
						width="40%"
						height="60%"
						src={blogEntryImage.fields.file.url}
						alt="Card image cap"
					/>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<Card.Text> {author.fields.name} </Card.Text>
							<Card.Text> {blogShortDescription} </Card.Text>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Link>
	);
};

export default BlogEntryPreview;
