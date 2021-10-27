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
  editProvebDashboard, getDashboardStories, addProverb, deleteStoryDashboard,
} = require('./dashboard');
const { errors } = require('./errors');
const { getFamilies, updateStory, deleteStory } = require('./city');

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
  addProverb,
  errors,
  deleteStory,
  deleteStoryDashboard,
};
