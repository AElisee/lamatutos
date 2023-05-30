const express = require("express");
const router = express.Router();
const Category = require("./../models/category.model");
const { newCategory, getCat } = require("../controllers/category.controller");

router.get("/", getCat);
router.post("/", newCategory);

module.exports = router;
