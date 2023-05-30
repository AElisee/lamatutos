const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// register controller
module.exports.register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(5000).json(error);
  }
};

// login crotroller
module.exports.login = async (req, res) => {
  try {
    // verifie que le username saisi existe dans la bd
    const user = await User.findOne({ username: req.body.username });
    // renvoie un message d'erreur s'il existe pas
    !user &&
      res
        .status(400)
        .json({ message: "les données d'identifications sont incorrectent" });

    // si username existe, on compare les mots de passe
    const isValid = bcrypt.compareSync(req.body.password, user.password);
    !isValid &&
      res
        .status(400)
        .json({ message: "les données d'identifications sont incorrectent" });

    // envoie toutes les données du user sauf le mot de passe
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};
