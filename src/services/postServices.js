import  { countAllPosts, createPost, findAllPosts }  from '../repositories/postRepository.js';
import post from '../schema/post.js';

export const createPostService = async (createPostObject) => {

    const caption = createPostObject.caption?.trim();

    const image = createPostObject.image;

    const post = await createPost(caption, image);
    
    return post;

}

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit);

    // calculate total number of posts
    const totalDocuments = await countAllPosts();

    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts,
        totalDocuments,
        totalPages
    }
}