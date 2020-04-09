const service = require('../services');

exports.createFlightInsurance = async (req, res) => {

    try {
        let doc = await service.flightInsurance.createFlightInsurance(req.body);
        res.json(doc);
    } catch (error) {
        res.status(400).json({
            'error': error.message
        });
    }

}