const myCollection = require("../models/user.models");
const userCollection = require("../models/user.models");

const displayUsers = (req, res) => {
  res.send("Welcome my CRUD Project");
};

const addUser = async (req, res) => {
  try {
    let { name, email, contactNo, password } = req.body;
    let newUser = await userCollection.create({
      name,
      email,
      contactNo,
      password,
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User is not created",
      error: error,
      errMsg: error.message,
    });
  }
};

const fetchAllUser = async (req, res) => {
  try {
    let users = await userCollection.find();
    if (users.length == 0) {
      return res.status(200).json({
        success: true,
        message: "No User Found",
      });
    }
    res.status(200).json({
      success: true,
      message: " Fetching all data successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Data not Fetched",
      errorObj: error,
      errorMsg: error.message,
    });
  }
};

const fetchOneUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await myCollection.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        //! HTTP Status Code: 404 — Not Found it is used when user not found
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      //! 200 - Ok it is used when server run successfully
      success: true,
      message: "User Find Successfully",
      user,
    });
    //!  HTTP Status Code: 500 Internal Server Error It is used when some error happened in interval server
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching one user",
      errorObj: error,
      errorMsg: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await userCollection.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "user does not found",
      });
    }
    let deleteUser = await myCollection.deleteOne({ _id: id });
    console.log(deleteUser);

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User does not delete",
      errorObj: error,
      errorMsg: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    let { name, email, contactNo, password } = req.body;
    let { id } = req.params;
    let user = await userCollection.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "user does not found",
      });
    }

    await userCollection.updateOne(
      { _id: id },
      { $set: { name, email, contactNo, password } }
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error  occur while updating the user ",
      errorObj: error,
      error: error.message,
    });
  }
};

const deleteAllUser = async (req, res) => {
  try {
    await userCollection.deleteMany();
    res.status(200).json({
      success: true,
      message: "Deleted all user",
    });
  } catch (error) {
    res.status(500).json({
      status: true,
      message: "Not Deleted all user",
      errorObj: error,
      errorMsg: error.message,
    });
  }
};

module.exports = {
  displayUsers,
  addUser,
  fetchAllUser,
  fetchOneUser,
  deleteUser,
  updateUser,
  deleteAllUser,
};
