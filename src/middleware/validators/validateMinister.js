const joi = require('joi');


const schema = joi.object({
    navn: joi.string().trim().required(),
    ministerpost: joi.string().trim().optional(),
    parti: joi.string().trim().required(),
    aktiv: joi.boolean().required(),
    opdateret: joi.date().optional(),
});

function validateMinister(req, res, next) {
    const {error} = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            error: `Missing required field: ${error}`,
        })
    }
    next();
}

module.exports = validateMinister;