const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
    name: {
         type: String, 
         required: true 
        }
},{
    timestamps: true
});

module.exports = model('Feedback', feedbackSchema);