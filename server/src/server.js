const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
});

module.exports = app