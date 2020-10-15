import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OlderBlogs = ({ oldData, history  }) => {




    return (
        <Card>
        {oldData &&
					oldData.map((oldBlog, index) => (
            <Link  to={`/blog/${oldBlog.fields.slug}`}>             
				<Button variant="dark" width="10%" height="15%" history={history}> {oldBlog.fields.title} </Button>
            </Link>	   
                ))}		
        </Card>
    )
}

export default OlderBlogs;




