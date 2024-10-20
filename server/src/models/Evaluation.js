import { Schema, model } from 'mongoose';

const evaluationSchema = new Schema({
    name: {
         type: String, 
         required: true 
        }
},{
    timestamps: true,
    versionKey: false
});

export default model('Evaluation', evaluationSchema);