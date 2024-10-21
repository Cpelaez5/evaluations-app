import './database'
import app from'./server'
require('dotenv').config()

const port = process.env.EVALUATIONS_APP_MONGODB_PORT || 5000;

app.listen(port, () => {
    console.log(`server started on port http://localhost:${port}/api`)
}) 

