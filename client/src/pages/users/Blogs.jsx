import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../components/page";

export function Blogs() {
	const { id } = useParams();

	React.useEffect(() => {
		fetch(`http://localhost:8000/post/1`, {
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Fetched user data:", data);
				setUser(data);
			})
			.catch((err) => {
				console.error("Error fetching user data:", err);
				setError(err.message || "An error occurred.");
			});
	}, [id]);

	return (
		<Page>
			<div>Here are the bloggs</div>
		</Page>
	);
}
