const logout = (req, res) => {
  res.clearCookie('token').json({ msg: 'لقد تم تسجيل الخروج بنجاح' });
};
module.exports = logout;
