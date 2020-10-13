import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import LPRecipeCard from "./LPRecipeCard";
import Button from "react-bootstrap/Button";

const LPRecipeCards = ({ recipes, match, history }) => {
	return (
		<Container>
			<div style={{ marginLeft: "300px", marginTop: "30px" }}>
				<Button variant="dark">Breakfast</Button>{" "}
				<Button variant="dark">Lunch</Button>{" "}
				<Button variant="dark">Dinner</Button>{" "}
				<Button variant="dark">Dessert</Button>{" "}
				<Button variant="dark">Snacks</Button>{" "}
			</div>

			<CardDeck style={{ marginLeft: "70px", padding: "20px" }}>
				{recipes.length >= 1 &&
					recipes.map((recipe, index) => (
						<LPRecipeCard recipe={recipe} key={index} />
					))}
			</CardDeck>
		</Container>
	);
};

export default LPRecipeCards;
