import { Schema, model } from "mongoose";

const postSchema = new Schema({

      photo: {
            type: String,
            maxLength: 80,
            required: true
      },
      description: {
            type: String,
            maxLength: 2200
      },
      author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
      },
      created_at: {
            type: Date,
            // Datos priskyrimas pagal nutylejima
            default: new Date()
      }
}, {
      toJSON: {
            virtuals: true
      }
});

postSchema.virtual('likes', {
      ref: 'Like',
      localField: '_id',
      foreignField: 'post',
      count: true
});

const post = model('Post', postSchema);

export default post;