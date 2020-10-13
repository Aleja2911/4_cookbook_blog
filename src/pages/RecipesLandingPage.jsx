import React from "react";
import LPRecipeCards from "../components/LPRecipeCards";

const RecipesLandingPage = ({ recipes }) => {
	return (
		<div>
			<h2>Recipe Index</h2>
			<LPRecipeCards recipes={recipes} />
		</div>
	);
};

export default RecipesLandingPage;
