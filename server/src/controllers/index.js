const { getMainCities } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');

module.exports = {
  getMainCities,
  signup,
  login,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
};
