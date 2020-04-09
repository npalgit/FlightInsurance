const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getAuthToken =  (req, res)=> {
    let token = jwt.sign({username: config.jwt.userName},config.jwt.secret);
    res.json({'token':token});
}