import React from "react";
import Container from "react-bootstrap/Container";
import RecipeDetailTemplate from "../components/RecipeDetailTemplate";

const RecipeDetailTemplates = ({ recipes, match, history }) => {
	return (
		<Container>
			{recipes.length >= 1 &&
				recipes.map((recipe, index) => (
					<RecipeDetailTemplate recipe={recipe} key={index} />
				))}
		</Container>
	);
};

export default RecipeDetailTemplates;
