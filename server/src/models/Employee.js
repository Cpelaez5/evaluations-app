import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
    name: {
         type: String, 
         required: true 
        }, 
    email: {
         type: String, 
         required: true
        }
},{
    timestamps: true,
    versionKey: false
});

export default model('Employee', employeeSchema);