import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// contentful client //
import { client } from "./client.js";

// importing components //
import RecipesLandingPage from "./pages/RecipesLandingPage";
import BlogLandingPage from "./pages/BlogLandingPage";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
	// set up the states //
	const [recipes, setRecipes] = useState([]);
	const [blogData, setBlogData] = useState([]);
	const [authors, setAuthors] = useState([]);

	// get all recipes (content_type = contentful) //
	useEffect(() => {
		client
			.getEntries({ content_type: "recipes" })
			.then((response) => {
				setRecipes(response.items);
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	// get all blog posts (content_type = contentful) //
	useEffect(() => {
		client
			.getEntries({ content_type: "blogPost" })
			.then((response) => {
				setBlogData(response.items);
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	useEffect(() => {
		client
			.getEntries({ content_type: "person" })
			.then((response) => {
				setAuthors(response.items);
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	return (
		<div className="App">
			<header>
				<NavbarComponent />
			</header>
			<main>
				<Switch>
					<Route path="/recipes/">
						<RecipesLandingPage recipes={recipes} />
					</Route>
					<Route path="/blog/">
						<BlogLandingPage blogData={blogData} />
					</Route>
					<Route path="/blog/:slug">
						<BlogDetail blogData={blogData} />
					</Route>
					<Route path="/">
						<HomePage recipes={recipes} />
					</Route>
				</Switch>
			</main>
			<footer>
				<FooterComponent authors={authors} />
			</footer>
		</div>
	);
};

export default App;
