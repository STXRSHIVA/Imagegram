import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from './routers/apiRouter.js';

const app = express();
const PORT = 3000;

// Use Express's built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());                                                              

app.use("/api",apiRouter);

app.get("/ping/:name", (req, res) => {
  console.log(req.params);
  return res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
