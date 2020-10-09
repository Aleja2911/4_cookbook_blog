import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import JumbotronComponent from "../components/JumbotronComponent";

import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCoffee,
	faEnvelope,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

const AuthorDetail = ({ authors }) => {
	const { shortBio, title, email } = authors.fields;
	/* 	const { name } = useParams; */

	return (
		<div>
			<JumbotronComponent />
			<Container>
				<div className="authorCard">
					<img src="img.jpg" alt="John" />
					<h1>John Doe</h1>
					<p className="title">jhg</p>
					<p>hg</p>
					<Link to="/">
						<FontAwesomeIcon icon={faCoffee} />
					</Link>
					<Link to="/">
						<FontAwesomeIcon icon={faHome} />
					</Link>
					<a href={`mailto:${email}`}>
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
				</div>
			</Container>
		</div>
	);
};

export default AuthorDetail;
