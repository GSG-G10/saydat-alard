const { verifyToken } = require('../utilities');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({ message: 'Not Authorized' });
  }
  try {
    const decoded = await verifyToken(token);
    req.userObj = decoded;
    return next();
  } catch (err) {
    return res.clearCookie('token').status(401).json({ message: 'Not Authorized' });
  }
};

module.exports = checkAuth;
