const { Schema, model } = require('mongoose');

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
    timestamps: true
});

module.exports = model('Employee', employeeSchema);