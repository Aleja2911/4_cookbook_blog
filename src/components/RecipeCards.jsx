import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import RecipeCard from "./RecipeCard";

const RecipeCards = ({ recipes }) => {
	return (
		<Container>
			<CardGroup>
				{recipes.length >= 1 &&
					recipes.map((recipe, index) => (
						<RecipeCard recipe={recipe} key={index} />
					))}
			</CardGroup>
		</Container>
	);
};

export default RecipeCards;
