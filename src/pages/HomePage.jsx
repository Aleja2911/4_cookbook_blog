import React from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import RecipeCards from "../components/RecipeCards";

const HomePage = ({ recipes }) => {
	return (
		<>
			<JumbotronComponent />
			<RecipeCards recipes={recipes} />
		</>
	);
};

export default HomePage;
