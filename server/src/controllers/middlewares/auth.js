const { httpResponse } = require('../../helpers');
const { verifyToken } = require('../utilities');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return httpResponse.badRequest(res, 'غير مصرح لك بالدخول');
  }

  const decoded = await verifyToken(token);
  req.userObj = decoded;
  next();
};

module.exports = checkAuth;
