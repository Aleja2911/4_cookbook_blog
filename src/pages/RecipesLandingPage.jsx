import React from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import LPRecipeCards from "../components/LPRecipeCards";

const RecipesLandingPage = ({ recipes }) => {
	return (
		<div>
			<JumbotronComponent />
			<h2>Recipe Index</h2>
			<LPRecipeCards recipes={recipes} />
		</div>
	);
};

export default RecipesLandingPage;
