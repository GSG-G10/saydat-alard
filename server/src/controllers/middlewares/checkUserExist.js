const { checkEmail } = require('../../database/queries');
const { schema } = require('../utilities');

const checkUserExist = async (req, res, next) => {
  try {
    const userObj = await schema.validateAsync(req.body);
    const { email } = userObj;
    const result = await checkEmail(email);
    if (result.rowCount > 0) {
      res.status(400).json({ msg: 'خطأ في البريد الإلكنروني او كلمة المرور ' });
    } else {
      req.userObj = userObj;
      next();
    }
  } catch (error) { res.status(500).json({ msg: error.details[0].message }); }
};

module.exports = checkUserExist;
