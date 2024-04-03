import { Schema, model } from "mongoose";

const projectSchema = new Schema({

      pavadinimas: {
            type: String,
            maxLength: 80,
            required: true
      },
      photo: {
            type: String,
            maxLength: 80,
            required: true
      },
      aprasymas: {
            type: String,
            maxLength: 2000
      },
      created_at: {
            type: Date,
            // Datos priskyrimas pagal nutylejima
            default: new Date()
      },
      data_svarstymo: {
        type: Date
      },
      autorius: {
            type: Schema.Types.ObjectId,
            ref: 'User'
      },
      statusas: {
            type: Schema.Types.ObjectId,
            ref: 'Status'
          
      }
}, {
      toJSON: {
            virtuals: true
      }
});



const project = model('Project', projectSchema);

export default project;