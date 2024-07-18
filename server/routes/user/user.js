const express = require("express");

const user = express.Router();

user.route("/").get((req, res) => {
  const currentUser = {
    username: "admin",
    email: "test@gmail.com",
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  res.json({
    msg: `Current logged in user is ${currentUser.username}`,
    data: currentUser,
  });
});

module.exports = user;

