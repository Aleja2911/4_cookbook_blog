import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const RecipeCard = ({ recipe }) => {
	const { title, shortDescription, quickFacts, featureImage } = recipe.fields;

	return (
		<Link to="/recipes/:title" id="cardlink">
			<Card>
				<Card.Img
					variant="top"
					src={featureImage.fields.file.url}
					alt="Card image cap"
				/>
				<Card.Body>
					<Card.Title key={title}>{title}</Card.Title>
					<Card.Text>{shortDescription}</Card.Text>
					<Card.Text>
						{quickFacts.length >= 1 &&
							quickFacts.map((quickFact) => (
								<Badge variant="dark" key="index">
									{quickFact}
								</Badge>
							))}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default RecipeCard;
