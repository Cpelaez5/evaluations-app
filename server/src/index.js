const app = require('./server');
require('./database');    
const port = 5000; 

app.listen(port, () => {
    console.log(`server started on port http://localhost:${port}/api`)
}) 

