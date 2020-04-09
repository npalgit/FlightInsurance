const mongoose = require('mongoose');
const moment = require('moment');

const interruptionConsequences = Object.freeze({
    Cancellation: 'Cancellation',
    Delay: 'Delay'
});

const interruptionReasons = Object.freeze({
    Weather: 'Weather',
    Technical: 'Technical',
    Staffing: 'Staffing',
    Security: 'Security',
    Other: 'Other'
});

const FlightInsuranceSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    policyNumber: Number,
    originalFightNumber: Number,
    originalFightDate: Date,
    flightDelayReason: {
        type: String,
        enum: Object.values(interruptionReasons)
    },
    flightDelayReasonDescription: String,
    flightInterruptionConsequence: {
        type: String,
        enum: Object.values(interruptionConsequences)
    },
    newFightNumber: Number,
    newFightDate: Date,
    delayTime: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

FlightInsuranceSchema.path('email').validate(function(email) {
    return new Promise(resolve => {
        const FlightInsurance = mongoose.model('FlightInsurance');
        if (this.isNew || this.isModified('FlightInsurance')) {
            FlightInsurance.find({
                email
            }).exec((err, docs) => resolve(!err && !docs.length));
        } else resolve(true);
    });
}, 'Email `{VALUE}` already exists');

FlightInsuranceSchema.path('flightDelayReasonDescription').validate(function(flightDelayReasonDescription) {
    if (this.flightDelayReason == interruptionReasons.Other) {
        return flightDelayReasonDescription.length;
    }
    return true;
}, 'You must provide a description when the flight interruption reason is Other.');

FlightInsuranceSchema.path('newFightNumber').validate(function(newFightNumber) {
    if (this.flightInterruptionConsequence == interruptionConsequences.Cancellation) {
        return newFightNumber > 0;
    }
    return true;
}, 'You must provide a new flight number when the flight is cancelled.');

FlightInsuranceSchema.path('newFightDate').validate(function(newFightDate) {
    if (this.flightInterruptionConsequence == interruptionConsequences.Delay) {
        return moment(newFightDate, "YYYY-MM-DD").isValid();
    }
    return true;
}, 'You must provide a valid new flight date when the flight is delayed.');

FlightInsuranceSchema.path('delayTime').validate(function(delayTime) {
    if (this.flightInterruptionConsequence == interruptionConsequences.Delay) {
        return delayTime.length;
    }
    return true;
}, 'You must provide a new flight delay time when the flight is delayed."');


exports.FlightInsurance = mongoose.model('FlightInsurance', FlightInsuranceSchema);