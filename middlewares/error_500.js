const internal_server_error = (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: `the request with the method ${req.method} with the route ${req.url} resulted in an internal server error. Something went wrong!`,
        response: error
    });
};

export default  internal_server_error ;