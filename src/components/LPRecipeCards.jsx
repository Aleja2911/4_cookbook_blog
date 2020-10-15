import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import LPRecipeCard from "./LPRecipeCard";

const LPRecipeCards = ({ recipes }) => {
	return (
		<Container>
			<CardColumns>
				{recipes.length >= 1 &&
					recipes.map((recipe, index) => (
						<LPRecipeCard recipe={recipe} key={index} />
					))}
			</CardColumns>
		</Container>
	);
};

export default LPRecipeCards;
