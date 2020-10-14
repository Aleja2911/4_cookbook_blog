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
						<Card.Title>
						<h2>{recipe.fields.title}</h2>
						</Card.Title>
							
							<Card id="recipeDetail">
						
							
								<Card.Img
									variant="top"
									src={
										recipe.fields.featureImage.fields.file
											.url
									}
									alt="Card image cap"
								/>
								
									<h3>Ingredients</h3>
									<Card.Text id="ingredients">
										{recipe.fields.ingredients}
									</Card.Text>
									<Card.Text>
										{recipe.fields.description}
									</Card.Text>
						
							</Card>
				</div>
			))}
		{/* <RecipeDetailTemplate recipes={recipes} /> */}
	</div>
  );
};
export default RecipeDetail;
