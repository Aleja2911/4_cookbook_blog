import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import LPRecipeCard from "./LPRecipeCard";


const LPRecipeCards = ({ recipes }) => {
	
	return (
		<Container>
			
				
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


