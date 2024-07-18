const express = require("express");
const router = express.Router();

const timeRouter = require("./time");

router.use("/api", timeRouter);

module.exports = router;
