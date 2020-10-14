import React from "react";
import LPRecipeCards from "../components/LPRecipeCards";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useParams } from "react-router-dom";

const RecipesLandingPage = ({ recipes }) => {
	let { tags } = useParams();

	return (
		<div>
		<ButtonGroup>
		{recipes && recipes.map((recipe, index) => (
			<Link
				key={index}
				to={`/recipes/tag/${recipe.fields.tags}/`}
				>
				<Button recipes={recipes}>{recipe.fields.tags}</Button>
			</Link>
		))}

			</ButtonGroup> 
		  
			<div>
			<LPRecipeCards recipes={recipes} />
			</div>
		</div>
				
	
	);
};

export default RecipesLandingPage;
