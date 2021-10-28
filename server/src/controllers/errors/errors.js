/* eslint-disable no-unused-vars */
const error404 = (req, res, next) => {
  res.status(404).json({ msg: 'خطأ ما: ما تبحث عنه غير موجود' });
};
const errors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ msg: err.msg, status: err.status });
  } else {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = { error404, errors };
