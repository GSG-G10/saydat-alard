const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
const { approvedStory, getDashboardCities, editProvebDashboard } = require('./dashboard');
const { getFamilies } = require('./city');

module.exports = {
  getMainCities,
  getCitiesNames,
  signup,
  login,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  getFamilies,
  getProverbs,
  approvedStory,
  getDashboardCities,
  editProvebDashboard,
};
