import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const RecipeDetailTemplate = ({ recipe }) => {

    const { title, featureImage, ingredients, description} = recipe.fields;
    
	return (
		<Link to="/recipes/slug">
			<Card>
				<Card.Img
					variant="top"
					src={featureImage.fields.file.url}
					alt="Card image cap"
				/>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{ingredients}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    
				</Card.Body>
			</Card>
		</Link>
	);
};

export default RecipeDetailTemplate;