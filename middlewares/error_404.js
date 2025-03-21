const not_found = (req, res, next) => {
    return res.status(404).json({
        status: false,
        message: `the request with the method ${req.method} with the route ${req.url} was not found`
    })
};

export default not_found;