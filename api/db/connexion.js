const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

mongoose.set("strictQuery", true);

const connectToMongoDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB Atlas (fiverr) !"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
};

connectToMongoDB();
