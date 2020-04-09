const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const config = require('./app/config')

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;
const app = express();

const initApp = () => {

    fs.readdirSync(models).forEach(function(file) {
        if (file.indexOf('.js') >= 0) {
            require(models + '/' + file);
        }
    })

    require('./app/config/express')(app);
    require('./app/route')(app);


    app.listen(port, () => {
        console.log('App started on port ' + port);
    });
}

const connect = () => {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', connect)
        .once('open', initApp);
    return mongoose.connect(config.db.DB_URL, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

connect();