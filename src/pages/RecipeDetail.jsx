import React from "react";
import RecipeDetailTemplate from "../components/RecipeDetailTemplate";
import JumbotronComponent from "../components/JumbotronComponent";



const RecipeDetail = ({recipes}) => {
	return(
	<div>
	<JumbotronComponent />
	<RecipeDetailTemplate recipes={recipes} />
	

	</div> 
	);
}; 
export default RecipeDetail;
