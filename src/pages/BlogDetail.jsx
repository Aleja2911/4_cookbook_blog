import React from "react";
import Container from "react-bootstrap/Container";

import { useParams } from "react-router-dom";

const BlogDetail = ({ blogData }) => {
	const { slug } = useParams();
	const newBlogs = blogData.find((blog) => blog.fields.slug === slug);
	console.log(newBlogs);
	// const[blogTemplates, setBlogTemplates] = useState(null);

	// useEffect(() => {
	//     axios({
	//         url: content_type: "blogPost"
	//     })
	//     .then(response => response.json())
	// })

	return (
		<Container>
			{newBlogs && <h1> {newBlogs.fields.title} </h1>}
			{/* <Switch>
            <Route path="/blog/:title"
            render={(props) => <BlogDetailTemplate blogTemplates={newBlogs}/>}>         
            </Route>
        </Switch> */}
		</Container>
	);
};

export default BlogDetail;
