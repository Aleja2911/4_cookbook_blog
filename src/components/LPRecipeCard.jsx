import React from "react";
import { Link } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";





const LPRecipeCard = ({ recipe, history }) => {
	const { title, slug, shortDescription, featureImage, } = recipe.fields;



	return (
		<Link to="/recipes/:title">
			<Card>
				<Card.Img
					variant="top"
					src={featureImage.fields.file.url}
					alt="Card image cap"
				/>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{shortDescription}</Card.Text>
					<Link to={`/recipes/${slug}/`}>
               			 <Button history={history}> Click Me! </Button>
           			 </Link>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default LPRecipeCard;