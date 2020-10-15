import LPRecipeCards from "../components/LPRecipeCards";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

const RecipesLandingPage = ({ recipes }) => {
	const [filter, setFilter] = useState(["Breakfast"]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(recipes);
	}, []);
	useEffect(() => {
		setProjects([]);
		const filtered = recipes.map((p) => ({
			...p,
			filtered: p.fields.tags.includes(filter),
		}));
		setProjects(filtered);
	}, [filter]);

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
			
		  

			<Jumbotron id="lpRecipeJumbotron" fluid>
				<Container>
					<h1>All our recipes</h1>
					<p>Cheese up</p>
				</Container>
			</Jumbotron>
			<div className="portfolio__labels">
				<Container>
					<h2>All recipes</h2>
					<Row className="justify-content-center">
						<Button variant="secondary" id="lpbutton">
							All
						</Button>
						<Button
							variant="secondary"
							id="lpbutton"
							active={filter === ["Breakfast"]}
							onClick={() => setFilter(["Breakfast"])}
						>
							Breakfast
						</Button>
						<Button
							variant="secondary"
							id="lpbutton"
							active={filter === "Dinner"}
							onClick={() => setFilter("Dinner")}
						>
							Dinner
						</Button>
					</Row>
				</Container>
			</div>
			<div>
				<LPRecipeCards recipes={recipes} />
			</div>
		</div>
	);
};

export default RecipesLandingPage;
