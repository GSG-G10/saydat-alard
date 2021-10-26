const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
const { approvedStory, getDashboardCities, editProvebDashboard } = require('./dashboard');
const { getFamilies } = require('./city');

module.exports = {
  getMainCities,
  getCitiesNames,
  signup,
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
