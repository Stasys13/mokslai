import mongoose from "mongoose";

const Post = mongoose.model('Post', {
    title: String,
    content: String,
    author: String,
    view_count: Number,
    created_at: Date,
    photo: String
    
  });

  export default Post;

