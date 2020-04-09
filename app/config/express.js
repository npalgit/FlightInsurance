const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = function(app) {
    app.use(
        cors({
            origin: ['http://localhost:3000'],
            optionsSuccessStatus: 200,
            credentials: true
        })
    );

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};