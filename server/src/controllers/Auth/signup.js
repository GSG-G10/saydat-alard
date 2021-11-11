const { addNewUser } = require('../../database/queries');
const { httpResponse } = require('../../helpers');
const { asyncSign } = require('../middlewares');
const { hashPassword } = require('../utilities');

const signup = async (req, res) => {
  const {
    name, email, password, originalCity,
  } = req.userObj;
  const hashedPassword = await hashPassword(password);
  const { rows } = await addNewUser(name, email, hashedPassword, originalCity);
  const { id, is_admin: isAdmin } = rows[0];
  const token = await asyncSign(id, name, isAdmin);

  res.cookie('token', token, { httponly: true, secure: true });
  return httpResponse.created(res, { id, isAdmin, name }, 'تم إنشاء الحساب بنجاح');
};
module.exports = signup;
