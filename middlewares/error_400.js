const Bad_Request = (error, req, res, next) => {
    if (error.status === 400) {
        return res.status(400).json({
            success: false,
            message: `the request with the method ${req.method} with the route ${req.url} resulted in a bad request`,
            response: error
        })
    }
    next(error)
}

export default Bad_Request;