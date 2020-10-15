import React, { Fragment, useState } from "react";
import LPRecipeCards from "../components/LPRecipeCards";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useParams } from "react-router-dom";

const RecipesLandingPage = ({ recipes }) => {
	let { tags } = useParams();

	const [useTag, setUseTag] = useState(null);

	const handleClick = () => {
		setUseTag({tags})

	}

	return (
		<div>
		<ButtonGroup>
		{recipes && recipes.map((recipe, index) => (
			<Link
                        key={index}
                        to= {`/tags/${tags}/`}
                        >

				<Button 
				variant= "dark"
				onClick={handleClick}
				recipes={recipes}>
				{recipe.fields.tags}
				</Button>	
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
