require('dotenv').config();

const app = require('./server');
require('./database');    
const port = process.env.EVALUATIONS_APP_MONGODB_PORT;

app.listen(port, () => {
    console.log(`server started on port http://localhost:${port}/api`)
}) 

