const { uploadToCloudinary } = require('./utilities');
const {
  getFamilies,
  updateStory,
  deleteStory,
  uploadStory,
  getCityData,
} = require('./city');
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
  editCityDashboard,
} = require('./dashboard');
const { errors } = require('./errors');

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
  editCityDashboard,
  getCityData,
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
