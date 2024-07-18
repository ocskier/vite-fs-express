const express = require("express");
const timeRouter = express.Router();

const timeRoutes = require("./time");

timeRouter.use(
  "/time",
  (req, res, next) => {
    console.log("Time router is handling this request -", req.query, req.body);
    next();
  },
  timeRoutes
);

module.exports = timeRouter;
