import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const RecipeDetail = ({ recipes }) => {
	let { slug } = useParams();
	return (
		<div>
			{recipes.length >= 1 &&
				recipes
					.filter((recipe) => recipe.fields.slug === slug)
					.map((recipe) => (
						<div>
							<h2>{recipe.fields.title}</h2>
							<Card>
								<Card.Img
									variant="top"
									src={
										recipe.fields.featureImage.fields.file
											.url
									}
									alt="Card image cap"
								/>
								<Card.Body>
									<Card.Title>
										{recipe.fields.title}
									</Card.Title>
									<Card.Text>
										{recipe.fields.ingredients}
									</Card.Text>
									<Card.Text>
										{recipe.fields.description}
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					))}
			{/* <RecipeDetailTemplate recipes={recipes} /> */}
		</div>
	);
};
export default RecipeDetail;
