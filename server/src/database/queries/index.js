const getUser = require('./getUser');
const { getMainCitiesQuery, getCitiesNamesQuery } = require('./mainPage');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const {
  updateStoryQuery,
  getFamiliesQuery,
  getUserIdQuery,
  deleteStoryQuery,
} = require('./cityPage');
const {
  editFamiliesQuery,
  approvePendingStory,
  editProverbQuery,
  getDashboardCitiesQuery,
  getStoriesQuery,
  addProverQuery,
  addNewCityQuery,
  checkCityByNameQuery,
  editCityQuery,
  deleteProverbDashboardQuery,
  deleteCityDashboardQuery,
} = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');
const { getCityDataQuery } = require('./cityPage');
const { getstoryDataQuery } = require('./story');

module.exports = {
  getCitiesNamesQuery,
  getMainCitiesQuery,
  editFamiliesQuery,
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
  addNewCityQuery,
  checkCityByNameQuery,
  deleteStoryQuery,
  deleteProverbDashboardQuery,
  deleteCityDashboardQuery,
  editCityQuery,
};
