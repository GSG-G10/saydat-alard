/* eslint-disable no-unused-vars */
const error404 = (req, res, next) => {
  res.status(404).json({ errMsg: 'خطأ ما: ما تبحث عنه غير موجود' });
};
const errors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ errMsg: err.msg, status: err.status });
  } else {
    res.status(500).json({ errMsg: 'حدث خطأ ما في السيرفر' });
  }
};

module.exports = { error404, errors };
