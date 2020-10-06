import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { client } from "./client.js";
import RecipeCard from "./components/RecipeCard";
import RecipesLandingPage from "./components/pages/RecipesLandingPage";
import BlogLandingPage from "./components/pages/BlogLandingPage";


const App = () => {
	// setup the states //
	/* const [data, setData] = useState([]); */
	const [recipes, setRecipes] = useState([]);
	const [blogData, setBlogData] = useState([]);

	useEffect(() => {
		client
			.getEntries({ content_type: "recipes" })
			.then((response) => {
				setRecipes(response.items);
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	useEffect(() => {
		client
			.getEntries({ content_type: "blogPost" })
			.then((response) => {
				setBlogData(response.items);
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	return (
		<div className="App">
			<header>
				logo
				<nav>
					<ul className="nav">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/recipes">Recipes</NavLink>
						<NavLink to="/blog">Blog</NavLink>
					</ul>
				</nav>
			</header>
			<main>
				<Switch>
					<Route path="/recipes/">
						<RecipesLandingPage recipes={recipes} />
					</Route>
					<Route path="/blog/">
						<BlogLandingPage blogData={blogData} />
					</Route>
					<Route path="/">
						<h1>Home</h1>
						<RecipeCard recipes={recipes} />
					</Route>
				</Switch>
			</main>
			<footer>Footer</footer>
		</div>
	);
};

export default App;
