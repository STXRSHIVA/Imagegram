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