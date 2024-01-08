import React from "react";
import { Page } from "../../components/page";
import { useParams } from "react-router-dom";

export function User() {
	const [user, setUser] = React.useState({});
	const [error, setError] = React.useState("");

	const { id } = useParams();

	React.useEffect(() => {
		fetch(`http://localhost:8000/user/${id}`, {
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then(setUser)
			.catch(setError);
	}, []);

	return (
		<Page>
			<h2>User Details</h2>
			{error && `${error}`}
			<div>{JSON.stringify(user)}
			</div>
		</Page>
	);
}
