import React from "react";
import RecipeCards from "../components/RecipeCards";
import Container from "react-bootstrap/Container";

const HomePage = ({ recipes }) => {
	return (
		<>
			<Container>
				<h2>Random recipes</h2>
				<RecipeCards recipes={recipes} />
			</Container>
		</>
	);
};

export default HomePage;
