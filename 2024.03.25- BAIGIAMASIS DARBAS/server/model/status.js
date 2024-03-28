import { Schema, model } from "mongoose";

const status = model('Status', new Schema({

    statusas: {
       type: String
    },
   
}));

export default status;