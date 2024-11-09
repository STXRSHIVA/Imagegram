import { createPostService } from "../services/postServices.js"; // Corrected file name

export async function createPostController(req, res) {
    console.log(req.file);

    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.location,
    });

    return res.status(201).json({ 
        success: true,
        message: "Post created successfully",
        data: post
    });
}
export async function getAllPosts(req, res) {
  // Implement the logic to get all posts
  return res.status(501).json({
    success: false,
    message: "Not Implemented",
  })
}