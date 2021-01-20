import React from "react";
import Container from "react-bootstrap/Container";

import CardDeck from "react-bootstrap/CardDeck";
import BlogEntryPreview from "./BlogEntryPreview";

const BlogEntryPreviews = ({ newData }) => {

	return (
		<Container className="blogPreviews">
			<CardDeck>
				{newData &&
					newData.map((preview, index) => (
						<BlogEntryPreview preview={preview} key={index} />
					))}
			</CardDeck>
		</Container>
	);
};

export default BlogEntryPreviews;
