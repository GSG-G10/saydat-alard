const { checkEmail } = require('../../database/queries');
const { boomHandler } = require('../../helpers');
const { schema } = require('../utilities');

const checkUserExist = async (req, res, next) => {
  try {
    const userObj = await schema.validateAsync(req.body);
    const { email } = userObj;
    const { rowCount } = await checkEmail(email);
    if (rowCount) {
      boomHandler.badRequest('يوجد حساب بهذا الإيميل');
    }
    req.userObj = userObj;
    next();
  } catch (err) {
    if (err.details) {
      next(boomHandler.badRequest(err.message));
    } else {
      next(err);
    }
  }
};

module.exports = checkUserExist;
