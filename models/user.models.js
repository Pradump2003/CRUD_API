//! Step create schema
//? import mongoose
//? define schema
//? create a model/collection
//? import

//? 1)-
const mongoose = require("mongoose");

//? 2)-
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "String is required"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    contactNo: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: true } // this is create created_at and updated_at
);

//? 3)- create a collection with the help of model(collectionName, schemaName)
const myCollection = mongoose.model("User", userSchema);

//! collection will be created in db with the name ==> users (lowercase + plural)

module.exports = myCollection;
