const mongoose = require('mongoose');

function validateMinisterId(req, res, next) {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ error: 'Ugyldigt minister-ID' });
    }

    next();
}

module.exports = validateMinisterId;
