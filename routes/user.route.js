const { Router } = require("express");
const {
  displayUsers,
  addUser,
  fetchAllUser,
  fetchOneUser,
  deleteUser,
  updateUser,
  deleteAllUser,
} = require("../controllers/user.controller");

const myRouter = Router();

myRouter.get("/", displayUsers);
myRouter.post("/add-user", addUser);
myRouter.get("/all-users", fetchAllUser);
myRouter.get("/user/:id", fetchOneUser);
myRouter.delete("/user/:id", deleteUser);
myRouter.patch("/user/:id", updateUser);
myRouter.delete("/delete-users", deleteAllUser);

module.exports = myRouter;
