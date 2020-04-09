const validator = require('validator');
const moment = require('moment');

exports.createInsuranceValidator = (req, res, next) => {
    let firstName = validator.trim(req.body.firstName);
    let lastName = validator.trim(req.body.lastName);
    let email = validator.trim(req.body.email);
    let policyNumber = req.body.policyNumber;
    let originalFightNumber = req.body.originalFightNumber;
    let originalFightDate = req.body.originalFightDate;
    let error = [];

    if (validator.isEmpty(firstName)) {
        error.push({
            'firstName': 'this is a required field.'
        });
    }

    if (validator.isEmpty(lastName)) {
        error.push({
            'lastName': 'this is a required field.'
        });
    }

    if (validator.isEmpty(email)) {
        error.push({
            'email': 'this is a required field.'
        });
    }

    if (!validator.isEmail(email)) {
        error.push({
            'email': 'please enter a valid email.'
        });
    }

    if (!policyNumber) {
        error.push({
            'policyNumber': 'this is a required field.'
        });
    }

    if (policyNumber && typeof policyNumber != 'number') {
        error.push({
            'policyNumber': 'please enter a valid number.'
        });
    }

    if (!originalFightNumber) {
        error.push({
            'originalFightNumber': 'this is a required field.'
        });
    }

    if (originalFightNumber && typeof originalFightNumber != 'number') {
        error.push({
            'originalFightNumber': 'please enter a valid number.'
        });
    }

    if (!dateformatValidate(originalFightDate)) {
        error.push({
            'originalFightDate': 'Please enter a valid date'
        });
    }

    if (!flightOriginalDateValidate(originalFightDate)) {
        error.push({
            'originalFightDate': 'Should be max 45 days ago from original date.'
        });
    }

    if (error.length > 0) {
       return res.status(400).json({'error': error});
    }

    return next();
}

const flightOriginalDateValidate = (value) => {
    const daysFromOriginalDate = moment().diff(value, 'days');
    if (daysFromOriginalDate <= 45) {
        return true;
    }
    return false;
}

const dateformatValidate = (value) => {
    const isValidFormat = moment(value, "YYYY-MM-DD").isValid();
    if (isValidFormat) {
        return true;
    }
    return false;
}