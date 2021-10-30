const { checkEmail } = require('../../database/queries');
const { httpResponse } = require('../../helpers');
const { schema } = require('../utilities');

const checkUserExist = async (req, res, next) => {
  const userObj = await schema.validateAsync(req.body);
  const { email } = userObj;
  const { rowCount } = await checkEmail(email);
  if (rowCount) {
    return httpResponse.badRequest(res, 'البريد الإلكتروني أو كلمة المرور خطأ');
  }
  req.userObj = userObj;
  next();
};

module.exports = checkUserExist;
