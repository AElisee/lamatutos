const User = require("./../models/user.model");
const Post = require("./../models/post.model");
const bcrypt = require("bcrypt");

// update user controller
module.exports.updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } // renvoie les nouvelles valeurs (voir postman)
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Vous ne pouvez que modifier votre compte !");
  }
};

// delete user controller
module.exports.deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "vous avez été supprimé !" });
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(401).json("Utilisateur inexistant");
    }
  } else {
    res.status(401).json("Vous ne pouvez que supprimer votre compte !");
  }
};

// get user
module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};
