import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPostController } from "./controllers/postController.js";
import { uploaderS3 } from "./config/multerConfig.js";

const app = express();
const PORT = 3000;

// Use Express's built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/ping/:name", (req, res) => {
  console.log(req.params);
  return res.json({ message: "pong" });
});

app.post("/post", uploaderS3.single('image'), createPostController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});