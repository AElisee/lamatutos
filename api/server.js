const express = require("express");
// import express from "express";
require("./db/connexion");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/users", require("./routes/user.route"));
app.use("/api/review", require("./routes/review.route"));
app.use("/api/order", require("./routes/order.route"));
app.use("/api/message", require("./routes/message.route"));
app.use("/api/gig", require("./routes/gig.route"));
app.use("/api/conversation", require("./routes/conversation.route"));

app.listen(5000, () => {
  console.log("le port du server : 5000");
});
