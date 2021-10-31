const { uploadToCloudinary } = require('./utilities');
const {
  getCityData, getFamilies, updateStory, deleteStory, uploadStory,
} = require('./city');
const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const {
  signup, login, logout, userInfo,
} = require('./Auth');
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
  userInfo,
  uploadToCloudinary,
};
