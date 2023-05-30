const express = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

// REGISTER
router.post("/register", register);
router.post("/login", login);

module.exports = router;
