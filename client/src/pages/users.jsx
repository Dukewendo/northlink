import React from 'react';
import {Page} from "../components/page";
import {UserListItem} from "../components/userListItem";

export function Users() {

  const [users, setUsers] = React.useState([])
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    fetch('http://localhost:8000/user', {headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(setUsers)
      .catch(setError)
  }, [])

  return <Page>
    <h2>Users</h2>
    {error && `${error}`}
    <div className='row'>
      {users.map(user => <UserListItem user={user}/>)}
    </div>

  </Page>;
}
