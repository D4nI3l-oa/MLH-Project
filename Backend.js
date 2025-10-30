// Fullstack Health Insurance Education Platform for International Students
// Tech Stack: MERN (MongoDB, Express.js, React, Node.js)

// === Backend (Node.js + Express + MongoDB) ===

// File: backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/healthEdu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Article = mongoose.model("Article", {
  title: String,
  content: String,
  category: String,
});

app.get("/api/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

app.post("/api/articles", async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.json(article);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
