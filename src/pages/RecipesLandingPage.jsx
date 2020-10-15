import React from "react";
import LPRecipeCards from "../components/LPRecipeCards";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const RecipesLandingPage = ({ recipes }) => {
	return (
		<div>
			<Jumbotron id="homePageJumbotron" fluid>
				<Container>
					<h1>The Goudafather</h1>
					<p>Cheese is our life</p>
				</Container>
			</Jumbotron>
			<LPRecipeCards recipes={recipes} />
		</div>
	);
};

export default RecipesLandingPage;
