const { checkEmail } = require('../../database/queries');
const { schema } = require('../utilities');

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  try {
    const result = await checkEmail(email);

    if (result.rowCount > 0) {
      res.status(403).json({ message: 'There is already an accout with this email address.' });
    } else {
      const user = await schema.validateAsync(req.body);
      req.user = user;
      next();
    }
  } catch (error) { res.status(403).json({ message: error }); }
};

module.exports = checkUserExist;
