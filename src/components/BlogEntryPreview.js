import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";


const BlogEntryPreview = ({ preview, history }) => {
	const {
		title,
		blogShortDescription,
		publishDate,
		blogEntryImage,
		author,
		slug,
	} = preview.fields;

	return (
		<Accordion defaultActiveKey="0">
			<Card id="blogPreviewCard" text={"light" ? "dark" : "white"}>
			  
				<Accordion.Toggle as={Card.Header} eventKey="1" id="cardToggle">
					<Card.Title> {title} </Card.Title>
					<Card.Text> {publishDate} </Card.Text>
					</Accordion.Toggle>
				<Card.Img
					variant="top"
					width="10rem"
					height="5em"
					id="cardImage"
					src={blogEntryImage.fields.file.url}
					alt="Card image cap"
				/>
				
				<Accordion.Collapse id='collapsing' eventKey="1">
					<Card.Body>
						<Card.Text> {author.fields.name} </Card.Text>
						<Card.Text> {blogShortDescription} </Card.Text>
						<Link to={`/blog/${slug}`}>
							<Button history={history}> Read Me! </Button>
						</Link>
					</Card.Body>
				</Accordion.Collapse>
				
			</Card>
		</Accordion>
	);
};

export default BlogEntryPreview;
