import { createPostService, getAllPostsService } from "../services/postServices.js"; // Corrected file name

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
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const paginatedPosts = await getAllPostsService(offset, limit);

    return res.status(200).json({
      success: true,
      message: "All posts",
      data: paginatedPosts,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}