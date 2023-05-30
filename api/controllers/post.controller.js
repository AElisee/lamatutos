const Post = require("./../models/post.model");

// get post post by id
module.exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all post
module.exports.getPosts = async (req, res) => {
  const username = req.query.user; // ?user=nom_du_user
  const catName = req.query.cat; // ?cat=nom_de_la_categorie
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username }); // {username:username}
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// new post
module.exports.newPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update post
module.exports.updatePost = async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(401).json(error);
      }
    } else {
      res.status(401).json("Vous ne pouvez pas modifier ce post !");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete post
module.exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Le post a été supprimé !");
      } catch (error) {
        res.status(401).json(error);
      }
    } else {
      res.status(401).json("Vous ne pouvez pas supprimer ce post !");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
