
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
app.use(express.static('./public'))
app.use(express.json())
//routes
app.get('/hello', (req, res) => {
    res.send("Hello world")
})

app.use('/api/v1/tasks',tasks)
app.use(notFound)

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port,(req, res) => {
        console.log(`Server is listening to port ${port}....`);
    })
    } catch (error) {
        console.log(error);
    }
}

start();