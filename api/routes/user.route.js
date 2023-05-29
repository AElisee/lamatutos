const express = require("express");
const { deleteUser } = require("../controllers/user.controller");

const router = express.Router();

router.delete("/:id", deleteUser);

module.exports = router;
