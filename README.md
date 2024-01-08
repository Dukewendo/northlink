# react-candidate-pairing-session
A project to be forked and worked on in a pair programming session with interview candidates.

## Running the application
- Run `npm install` in both the `client` and `server` directories.
- Run `npm run develop` in the server directory to launch the server.
  - The server should be accessible on port 8000.
- Run `npm start` in the client directory to launch the client.
    - The client should be accessible in your browser on port 1234. 

## API

A list of currently available API endpoints
- Fetch a list of all users (ID and email only)
    - http://localhost:8000/user
- Fetch a specific user's full information
    - http://localhost:8000/user/[:userId]
- Fetch a blog post      
    - http://localhost:8000/post/[:postId]

## Technologies

A non-exhaustive list of packages used:
- React
- React Router
- Parcel
- Typescript
- Express
- OvernightJS

