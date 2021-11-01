/* eslint-disable no-unused-vars */
const error404 = (req, res, next) => {
  res.status(404).json({ message: 'ما تبحث عنه غير موجود' });
};

const errors = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'internal server error' });
  }
};

module.exports = { error404, errors };
