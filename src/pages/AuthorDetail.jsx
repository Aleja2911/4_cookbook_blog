import React from "react";

import { Link, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCoffee,
	faEnvelope,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

const AuthorDetail = ({ authors }) => {
	let { slug } = useParams();
	return (
		<div>
			{authors.length >= 1 &&
				authors
					.filter((author) => author.fields.slug === slug)
					.map((author) => (
						<Container>
							<div className="authorCard">
								<img
									src={`${author.fields.image.fields.file.url}`}
									alt={`picture of ${author.fields.slug}`}
								/>
								<h1>{author.fields.name}</h1>
								<p className="title">{author.fields.title}</p>
								<p>{author.fields.shortBio}</p>
								<Link to="/">
									<FontAwesomeIcon icon={faCoffee} />
								</Link>
								<Link to="/">
									<FontAwesomeIcon icon={faHome} />
								</Link>
								<a href={`mailto:${author.fields.email}`}>
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</div>
						</Container>
					))}
		</div>
	);
};

export default AuthorDetail;
