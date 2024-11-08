import  express  from "express";
import connectDB from "./config/dbConfig.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "pong" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});