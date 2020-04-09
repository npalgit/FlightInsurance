const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/insurance';

exports.createFlightInsurance = data => {
    return new Promise((resolve, reject) => {
        const FlightInsurance = mongoose.model('FlightInsurance');
        let newFlightInsurance = new FlightInsurance(data)
        newFlightInsurance.save()
            .then(doc => {
                resolve(doc);
            })
            .catch(err => {
                reject(err);
            });
    });
}