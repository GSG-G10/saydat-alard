const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
const { updateStory,getFamilies } = require('./city');
const {
  approvedStory, getDashboardProverbs, getDashboardCities, editProvebDashboard,getDashboardStories
} = require('./dashboard');
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
  updateStory,
  getFamilies,
  getProverbs,
  approvedStory,
  getDashboardStories,
  getDashboardProverbs,
  getDashboardCities,
  editProvebDashboard,
};
