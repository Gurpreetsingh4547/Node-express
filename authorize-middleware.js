const { people } = require('./data');

/**
 * Middleware function to authorize user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 */
const authorize = (req, res, next) => {
    const {userId} = req.query;
    if(!userId) {
        res.status(401).send("Unauthorized");
        return;
    } else if (userId) {
        let user = people.find(user => user.id === Number(userId));
        if(user) {
            req.user = user;
            next();
            return;
        }
        res.status(401).send("Unauthorized");
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};

module.exports = authorize;