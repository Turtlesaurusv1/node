const express = require('express')
const router2 = express.Router();


const {login} = require('../controllers/login');


router2.route('/').post(login);


module.exports = router2;

