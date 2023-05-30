const express = require("express");
const mongoose = require("mongoose");
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/user.controller");
const User = require("../models/user.model");

const router = express.Router();

// REGISTER
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

module.exports = router;
