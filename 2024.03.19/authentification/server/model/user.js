import { Schema, model } from "mongoose";

const userSchema = new Schema({
  user_name: {
    // Tipo priskirymas 
    type: String,
    // Nurodome, jig vartotojo vardas tures buti nesikartojantis visoje kolekcijoje
    unique: true,
    // Vartotojo vardas Minimum tris simboliai
    minLength: 3,
    //Maximum 50
    maxLength: 50,
    // Nurodymas, jog reiksme bus reikalaujama
    required: true
  },
  photo: {
    type: String,
    maxLength: 80,

  },
  bio: {
    type: String,
    maxLength: 160
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 50,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 100,
    required: true
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

userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author'
});


userSchema.virtual('postCount', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
  count: true
});


export default model('User', userSchema);




