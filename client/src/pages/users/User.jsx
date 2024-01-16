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
		.then((data) => {
		  console.log("Fetched user data:", data);
		  setUser(data);
		})
		.catch((err) => {
		  console.error("Error fetching user data:", err);
		  setError(err.message || "An error occurred.");
		});
	}, [id]);
  
	console.log("User data:", user);
	console.log("Error:", error);
  
	const renderNestedObjects = (obj) => {
	  return (
		<div>
		  {Object.entries(obj).map(([key, value]) => (
			<div key={key}>
			  <strong>{key}:</strong>{" "}
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
  
	const renderUserDetails = () => {
	  if (Object.keys(user).length === 0) {
		return <div>Loading...</div>;
	  }
  
	  return (
		<div>
		  <h2>User Details</h2>
		  {error && <div>{error}</div>}
		  {renderNestedObjects(user)}
		</div>
	  );
	};
  
	return <Page>{renderUserDetails()}</Page>;
  }