const express = require("express");
const { createUser } = require("../controller/User.js");

const router = express.Router();

router.post("/register", createUser);

module.exports = router;
