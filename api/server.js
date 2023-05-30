const express = require("express");
const mongoConnexion = require("./db/dbConnexion");
const multer = require("multer");

const app = express();
app.use(express.json());

// uploader un fichier avec multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Le fichier à été téléchargé !");
});
// ---

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/users", require("./routes/user.route"));
app.use("/api/posts", require("./routes/post.route"));
app.use("/api/categories", require("./routes/category.route"));

app.listen("5000", () => {
  console.log("Le server a démarré au port: 5000");
});
