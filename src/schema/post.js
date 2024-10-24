import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    caption:{
        type: String,
        required: true,
        minLength: 5
    },
    image:{
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
});

const post = mongoose.model("Post",postSchema); // post collection

export default post;