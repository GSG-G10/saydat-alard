/* eslint-disable no-unused-vars */
const { httpResponse } = require('../../helpers');

const errorCases = {
  400: (res, message) => httpResponse.badRequest(res, message),
  500: (res) => res.status(500).json({ message: 'internal server error' }),
};

const error404 = (req, res, next) => httpResponse.notFound(res, 'ما تبحث عنه غير موجود');

const errors = (err, req, res, next) => {
  const errorStatus = err.status || err.details ? 400 : 500;
  if (errorCases[errorStatus]) {
    return errorCases[errorStatus](res, err.message);
  }
  return errorCases[500](res);
};

module.exports = { error404, errors };
