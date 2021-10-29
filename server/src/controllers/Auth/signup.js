const { addNewUser } = require('../../database/queries');
const { hashPassword } = require('../utilities');

const signup = async (req, res, next) => {
  const {
    name, email, password, orginialTown,
  } = req.userObj;
  try {
    const hashedPassword = await hashPassword(password);
    const { rows } = await addNewUser(name, email, hashedPassword, orginialTown);
    const { id, is_admin } = rows[0];
    req.id = id;
    req.name = name;
    req.isAdmin = is_admin;
    next();
  } catch (error) {
    res.status(500).json({ msg: 'حدث خطأ ما في السيرفر' });
  }
};
module.exports = signup;
