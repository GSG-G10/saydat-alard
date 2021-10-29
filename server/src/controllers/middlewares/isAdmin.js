const checkAdmin = (req, res, next) => {
  const { isAdmin } = req.userObj;
  if (isAdmin) {
    return next();
  }
  return res.status(403).json({ msg: 'طلب مرفوض  ' });
};
module.exports = checkAdmin;
