const { Schema, model } = require('mongoose');

const evaluationSchema = new Schema({
    name: {
         type: String, 
         required: true 
        }
},{
    timestamps: true
});

module.exports = model('Evaluation', evaluationSchema);