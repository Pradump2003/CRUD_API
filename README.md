# CRUD-App

A simple Express.js CRUD application using MongoDB and Mongoose.

## Features

- Create, Read, Update, Delete (CRUD) operations for users
- RESTful API endpoints
- MongoDB database integration with Mongoose
- Error handling and status codes

## Project Structure

```
CRUD-App/
│
├── controllers/
│   └── user.controller.js
├── models/
│   └── user.models.js
├── routes/
│   └── user.route.js
├── config/
│   └── db.js
├── server.js
└── package.json
```

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd CRUD-App
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up MongoDB:**
   - Make sure MongoDB is running locally on `mongodb://127.0.0.1:27017/`
   - The database name is set in your `config/db.js` file (e.g., `crud-app`).

4. **Start the server:**
   ```sh
   npm start
   ```
   The server will run on [http://localhost:9000](http://localhost:9000).

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/`                   | Welcome message          |
| POST   | `/add-user`           | Add a new user           |
| GET    | `/all-users`          | Get all users            |
| GET    | `/user/:id`           | Get a single user by ID  |
| PATCH  | `/user/:id`           | Update a user by ID      |
| DELETE | `/user/:id`           | Delete a user by ID      |
| DELETE | `/delete-users`       | Delete all users         |

## Example User Object

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "contactNo": "1234567890",
  "password": "yourpassword"
}
```

## Notes

- Make sure to use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the API endpoints.
- Passwords are stored as plain text for demonstration purposes. **Do not use this in production.** Always hash passwords before storing.

## License

MIT