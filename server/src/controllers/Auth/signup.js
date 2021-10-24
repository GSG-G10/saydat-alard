const { addNewUser } = require('../../database/queries');
const { hashPassword } = require('../utilities');

const signup = async (req, res, next) => {
  const {
    name, email, password, orginialTown,
  } = req.user;
  try {
    const hashedPassword = await hashPassword(password);
    const { rows } = await addNewUser(name, email, hashedPassword, orginialTown);
    req.userInfo = rows[0];
    next();
  } catch (error) { res.status(403).json({ message: error }); }
};
module.exports = signup;
