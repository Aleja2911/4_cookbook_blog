import React, { useState, useEffect } from "react";

import { client } from "./client.js";

const App = () => {
	const [data, setData] = useState();

	useEffect(() => {
		client
			.getEntries()
			.then((response) => {
				setData()
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	return (
		<div className="App">
			<header>
				logo
				navbar
				home
				recipes
				blog
				guides
				random rec
				<h1>Hello</h1>
			</header>
			<main>
				<section>
					<p>content</p>
				</section>
			</main>

		</div>
	);
};

export default App;
