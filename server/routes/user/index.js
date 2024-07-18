const express = require("express");
const userRouter = express.Router();

const userRoutes = require("./user");

userRouter.use(
  "/user",
  (req, res, next) => {
    console.log("User router is handling this request -", req.query, req.body);
    next();
  },
  userRoutes
);

module.exports = userRouter;
