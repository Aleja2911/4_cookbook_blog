import React from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import BlogEntryPreviews from "../components/BlogEntryPreviews";
import { Switch, Route } from "react-router-dom";
import BlogDetail from "../pages/BlogDetail";


const BlogLandingPage = ({ blogData }) => {


	return (
		<div>
			<JumbotronComponent />
			<h1> The Chronicles of Cheese </h1>
			<BlogEntryPreviews blogData={blogData} />
			<Switch>		
				<Route path="/blog-detail/{title}" component={BlogDetail}>
					
				</Route>
			</Switch>
		</div>
	);
};

export default BlogLandingPage;
