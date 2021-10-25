const { getMainCities } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
const { approvedStory, getDashboardCities } = require('./dashboard');

module.exports = {
  getMainCities,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  approvedStory,
  getDashboardCities,
};
