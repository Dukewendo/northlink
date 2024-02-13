import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../components/page";

export function Blogs() {
	const [blog, setBlog] = React.useState({});
	const [error, setError] = React.useState("");

	const { id } = useParams();

	React.useEffect(() => {
		fetch(`http://localhost:8000/post/${id}`, {
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Fetched user blog:", data);
				setBlog(data);
			})
			.catch((err) => {
				console.error("Error fetching user blog:", err);
				setError(err.message || "An error occurred.");
			});
	}, [id]);

	console.log("User blog:", blog);
	console.log("Error:", error);

	const renderNestedObjects = (obj) => {
		return (
			<div>
				{Object.entries(obj).map(([key, value]) => (
					<div key={key}>
						<strong>{key.toUpperCase()}:</strong>{" "}
						{typeof value === "object" ? (
							renderNestedObjects(value)
							) : (
							value
							)}
					</div>
				))}
			</div>
		);
	};

	const renderUserPosts = () => {
		if (Object.keys(blog).length === 0) {
			return <div>Loading Posts...</div>;
		}

		return (
			<div>
				<h2>User Posts</h2>
				{error && <div>{error}</div>}
				{renderNestedObjects(blog)}
			</div>
		);
	};

	return <Page>{renderUserPosts()}</Page>;
}
