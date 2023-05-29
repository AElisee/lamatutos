const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// inscription
module.exports.register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("Nouvel utilisateur ajouté !");
  } catch (error) {
    res.status(500).send("Une erreur est survenue !");
  }
};

// connexion
module.exports.login = async (req, res) => {
  try {
    // verifier sur le mail existe dans la db
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("Utilisateur non touvé !");

    // compareer les mots de passe
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return req.status(400).res("Adresse email ou mot de passe incorret !");

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (error) {
    res.status(500).send("Une erreur est survenue !");
  }
};

// deconnexion
module.exports.logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
