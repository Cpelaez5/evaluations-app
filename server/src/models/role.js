import { Schema, model } from 'mongoose';

export const ROLES = ['admin', 'manager', 'employee'];

const roleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},{
    versionKey: false,
})

export default model('Role', roleSchema);