import React from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import RecipeCards from "../components/RecipeCards";
import Container from "react-bootstrap/Container";

const HomePage = ({ recipes }) => {
	return (
		<>
			<JumbotronComponent />
			<Container>
				<h2>Random recipes</h2>
				<RecipeCards recipes={recipes} />
			</Container>
		</>
	);
};

export default HomePage;
