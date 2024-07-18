const express = require("express");

const time = express.Router();

time.route("/").get((req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json(`Current server time is: ${currentTime}`);
});

module.exports = time;
