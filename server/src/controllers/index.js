const { getMainCities, getCitiesNames } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');

module.exports = {
  getMainCities,
  getCitiesNames,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
};
