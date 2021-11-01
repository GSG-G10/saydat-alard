const { boomHandler } = require('../../helpers');
const { verifyToken } = require('../utilities');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    boomHandler.badRequest('غير مصرح لك بالدخول');
  }
  const decoded = await verifyToken(token);
  req.userObj = decoded;
  next();
};

module.exports = checkAuth;
