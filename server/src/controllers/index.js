const { getMainCities } = require('./main');
const { signup } = require('./Auth');
const { checkUserExist, setCookie } = require('./middlewares');

module.exports = {
  getMainCities,
  signup,
  checkUserExist,
  setCookie,
};
