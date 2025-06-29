const express = require("express");
const myRouter = require("./routes/user.route");
const connectDB = require("./config/db");
connectDB();

const app = express();

//? app.use(express.json()) is middleware in Express that parses incoming JSON payloads from the request body.
//? It allows your Express app to read and understand JSON data sent in HTTP requests (usually POST, PUT, or PATCH).

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", myRouter);

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Server is running on port 9000, http://localhost:9000");
});

//? In App Development payload refer to actual data send to http request or response.
