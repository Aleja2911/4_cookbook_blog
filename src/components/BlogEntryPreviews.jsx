import React from "react";
import Container from "react-bootstrap/Container";

import CardGroup from "react-bootstrap/CardGroup";
import BlogEntryPreview from "./BlogEntryPreview";

const BlogEntryPreviews = ({ newData }) => {

	return (
		<Container>
			<CardGroup>
				{newData &&
					newData.map((preview, index) => (
						<BlogEntryPreview preview={preview} key={index} />
					))}
			</CardGroup>
		</Container>
	);
};

export default BlogEntryPreviews;
