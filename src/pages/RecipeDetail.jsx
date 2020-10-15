import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {client} from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
									width="40%"
									height="50%"
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
									
									<h3>Method</h3>
					          	<div>{documentToReactComponents(recipe.fields.description_recipes)}</div> 
									
									</Card.Text>
						
							</Card>
				</div>
			))}
		{/* <RecipeDetailTemplate recipes={recipes} /> */}
	</div>
  );
};
export default RecipeDetail;
