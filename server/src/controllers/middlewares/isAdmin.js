const checkAdmin = (res, req, next) => {
  const { isAdmin } = req.userObj;
  if (isAdmin) {
    return next();
  }
  return res.status(403).json({ msg: 'Forbbiden Access' });
};
module.exports = checkAdmin;
