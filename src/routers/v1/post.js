// here all the post related routes are present
import express from "express";

import { uploaderS3 } from "../config/multerConfig.js";
import { createPostController, getAllPosts } from "../controllers/postController.js";

const router = express.Router();

router.post("/", uploaderS3.single('image'),createPostController)

router.get("/", getAllPosts );

export default router;

