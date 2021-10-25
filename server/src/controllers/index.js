const { getMainCities } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');

module.exports = {
  getMainCities,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
};
