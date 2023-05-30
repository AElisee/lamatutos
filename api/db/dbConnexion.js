const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoConnexion = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.log(
      "Oups, une erreur est survenue lors de connexion à MongoDB" + error
    );
  }
};

mongoConnexion();
