import { Schema, model } from "mongoose";

const userSchema = new Schema({
  vardas: {
    // Tipo priskirymas 
    type: String,
    // Vartotojo vardas Minimum tris simboliai
    minLength: 3,
    //Maximum 50
    maxLength: 50,
    // Nurodymas, jog reiksme bus reikalaujama
    required: true
  },
  pavarde: {
    type: String,
    maxLength: 80,

  },
  partija: {
    type: String,
    maxLength: 40
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
  registracijos_data: {
    type: Date,
    // Datos priskyrimas pagal nutylejima
    default: new Date()
  },
  pirmininkas: {
    type: Boolean,
    default: false
  },

}, {
  toJSON: {
        virtuals: true
  }
});


export default model('User', userSchema);




