import { Schema, model } from "mongoose";

const like = model('Like', new Schema({

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    created_at: {
        type: Date,
        // Datos priskyrimas pagal nutylejima
        default: new Date()
    }

}));

export default like;