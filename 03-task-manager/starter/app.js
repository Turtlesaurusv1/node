const express = require('express');
const app = express();
const port = 3000



app.get('/hello', (req, res) => {
    res.send("Hello world")
})

app.listen(port,(req, res) => {
    console.log(`Server is lostening to port ${port}....`);
})