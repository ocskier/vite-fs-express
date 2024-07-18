const express = require("express");
const router = express.Router();

const timeRouter = require("./time");
const userRouter = require("./user");

router.use("/api", timeRouter);
router.use("/api", userRouter);

module.exports = router;

