const jwt = require('jsonwebtoken');
const config = require('../config');

exports.jwtVerify = (req, res, next) =>{
    if(req.headers['authorization'])
    {
        let token = req.headers['authorization'].split(' ')[1];   
        try {
            const decoded = jwt.verify(token, config.jwt.secret); 
            if(decoded.username == config.jwt.userName) {
                next();
            }
            else {
                return res.status(403)
                    .json({'msg':'Please pass a valid token'});
            }
        } catch (error) {
            return res.status(403)
                .json({'msg':'Please pass a valid token'});
        }   

    }
    else {
        return res.status(403)
            .json({'msg':'No token supplied'});
    }
}