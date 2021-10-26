const {
  getCityData, getFamilies, updateStory, deleteStory,
} = require('./city');
const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
const {
  approvedStory, getDashboardProverbs, getDashboardCities,
  editProvebDashboard, getDashboardStories, addProverb,
} = require('./dashboard');

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
  getCityData,
  addProverb,
  deleteStory,
};
