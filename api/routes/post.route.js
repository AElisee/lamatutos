const express = require("express");
const Post = require("../models/post.model");
const {
  newPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/:id", getPost);
router.get("/", getPosts);
router.post("/", newPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
