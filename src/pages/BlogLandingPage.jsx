import React from "react";

import JumbotronComponent from "../components/JumbotronComponent";
import BlogEntryPreviews from "../components/BlogEntryPreviews";
import Container from "react-bootstrap/Container";

const BlogLandingPage = ({ blogData }) => {
	return (
		<Container>
			<JumbotronComponent />

			<h1> The Chronicles of Cheese </h1>
			<BlogEntryPreviews blogData={blogData} />
		</Container>
	);
};

export default BlogLandingPage;
