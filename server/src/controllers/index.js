const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup, login, logout } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
const {
  approvedStory,
  getDashboardProverbs,
  getDashboardCities,
  editProvebDashboard,
  getDashboardStories,
  addProverb,
  addCity,
  deleteCityDashboard,
  deleteStoryDashboard,
  deleteProvebDashboard,
} = require('./dashboard');
const { errors } = require('./errors');
const {
  getFamilies,
  updateStory,
  deleteStory,
  uploadStory,
} = require('./city');
const { uploadToCloudinary } = require('./utilities');

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
  addCity,
  errors,
  deleteStory,
  uploadStory,
  deleteProvebDashboard,
  deleteCityDashboard,
  deleteStoryDashboard,
  logout,
  uploadToCloudinary,
};
