function errorHandler(err, req, res, next) {
    console.error(`API-fejl`, err.message);
    const status = err.status || 500;
    res.status(status).json({
        error: status === 404 ? `minister findes ikke` :
            status === 502 ? `eksterne API kunne ikke levere data` :
                `der opstod en serverfejl`
    });
}

module.exports = errorHandler;