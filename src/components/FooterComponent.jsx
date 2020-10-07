import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const FooterComponent = ({ authors }) => {
	console.log(authors);
	return (
		<Navbar className="footer" bg="light">
			<Container>
				Made with Love by
				<ButtonGroup>
					{authors.length >= 1 &&
						authors.map((author, index) => (
							<Button variant="secondary" key={index}>
								{author.fields.name}
							</Button>
						))}
				</ButtonGroup>
			</Container>
		</Navbar>
	);
};

export default FooterComponent;
