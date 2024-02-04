/**
 * Middleware function to log request details
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function
 */
const logger = (req, res, next) => {
    // Extract method and url from the request object
    const method = req.method;
    const url = req.url;
    // Get the current year for the time
    const time = new Date().getFullYear();
    // Log the request details
    console.log(`Method: ${method} | Url: ${url} | Time: ${time}`);
    // Call the next middleware function
    next();
}

module.exports = logger;