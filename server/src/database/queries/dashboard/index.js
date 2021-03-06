const approvePendingStory = require('./approverdStory');
const getStoriesQuery = require('./getStoriesQuery');
const getDashboardProverbsQuery = require('./getDashboardProverbsQuery');
const editProverbQuery = require('./editProverbQuery');
const addProverQuery = require('./addProverQuery');
const getDashboardCitiesQuery = require('./getDashboardCitiesQuery');
const addNewCityQuery = require('./addNewCityQuery');
const checkCityByNameQuery = require('./checkCityExist');
const deleteProverbDashboardQuery = require('./deleteProverbDashboardQuery');
const deleteCityDashboardQuery = require('./deleteCityDashboardQuery');
const { editCityQuery, editFamiliesQuery } = require('./editCityQuery');

module.exports = {
  approvePendingStory,
  editProverbQuery,
  getDashboardCitiesQuery,
  getDashboardProverbsQuery,
  getStoriesQuery,
  addProverQuery,
  addNewCityQuery,
  checkCityByNameQuery,
  deleteProverbDashboardQuery,
  deleteCityDashboardQuery,
  editCityQuery,
  editFamiliesQuery,
};
