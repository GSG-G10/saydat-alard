const getUser = require('./getUser');
const { getMainCitiesQuery, getCitiesNamesQuery } = require('./mainPage');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const {
  updateStoryQuery, getFamiliesQuery, getUserIdQuery, deleteStoryQuery,
} = require('./cityPage');
const {
  approvePendingStory, editProverbQuery, getDashboardCitiesQuery, getStoriesQuery,
  addProverQuery, deleteProverbDashboardQuery, deleteCityDashboardQuery, editCityQuery,
} = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');
const { getCityDataQuery } = require('./cityPage');
const { getstoryDataQuery } = require('./story');

module.exports = {
  getCitiesNamesQuery,
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getStoriesQuery,
  updateStoryQuery,
  getUser,
  getDashboardCitiesQuery,
  getFamiliesQuery,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
  getCityDataQuery,
  getstoryDataQuery,
  addProverQuery,
  getUserIdQuery,
  deleteStoryQuery,
  deleteProverbDashboardQuery,
  deleteCityDashboardQuery,
  editCityQuery,
};
