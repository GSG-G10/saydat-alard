const { verifyToken } = require('../utilities');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({ msg: 'Not Authorized' });
  }
  try {
    const decoded = await verifyToken(token);
    req.userObj = decoded;
    next();
  } catch (err) {
    res.clearCookie('token').status(401).json({ msg: 'Not Authorized' });
  }
};

module.exports = checkAuth;
