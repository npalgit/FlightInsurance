const controllers = require('./controllers');
const middleware = require('./middlewars');
module.exports = function(app) {
    app.get('/getAuthToken' , controllers.auth.getAuthToken);
    app.post('/FlightInsurance', middleware.auth.jwtVerify, middleware.flightInsurance.createInsuranceValidator, controllers.flightInsurance.createFlightInsurance);
}