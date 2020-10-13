import React from "react";

import BlogEntryPreviews from "../components/BlogEntryPreviews";
/* import { Switch, Route } from "react-router-dom";
import BlogDetail from "../pages/BlogDetail"; */

const BlogLandingPage = ({ blogData }) => {
	return (
		<div>
			
			<h1> The Chronicles of Cheese </h1>
			<BlogEntryPreviews blogData={blogData} />
		</div>
	);
};

export default BlogLandingPage;
