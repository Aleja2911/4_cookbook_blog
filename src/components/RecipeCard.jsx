import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const RecipeCard = ({ recipes }) => {
	return (
		<div>
			{recipes.length >= 1 &&
				recipes.map((recipe) => <p>{recipe.fields.title}</p>)}
		</div>
	);
};

export default RecipeCard;
