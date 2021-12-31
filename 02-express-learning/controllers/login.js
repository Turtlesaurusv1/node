const express = require('express')
const r = express.Router()


const login = (req, res) => {
    const {name} = req.body
    if(name){
      return res.status(200).send(`Welcome ${name}`)
    }

    res.status(404).send('POST')
}


module.exports = {login};


