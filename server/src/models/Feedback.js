import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema({
    name: {
         type: String, 
         required: true 
        }
},{
    timestamps: true
});

export default model('Feedback', feedbackSchema);