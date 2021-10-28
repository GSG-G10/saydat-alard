const approvePendingStory = require('./approverdStory');
const getStoriesQuery = require('./getStoriesQuery');
const getDashboardProverbsQuery = require('./getDashboardProverbsQuery');
const editProverbQuery = require('./editProverbQuery');
const addProverQuery = require('./addProverQuery');
const getDashboardCitiesQuery = require('./getDashboardCitiesQuery');
const deleteProverbDashboardQuery = require('./deleteProverbDashboardQuery');
const deleteCityDashboardQuery = require('./deleteCityDashboardQuery');
const editCityQuery = require('./editCityQuery');

module.exports = {
  approvePendingStory,
  editProverbQuery,
  getDashboardCitiesQuery,
  getDashboardProverbsQuery,
  getStoriesQuery,
  addProverQuery,
  deleteProverbDashboardQuery,
  deleteCityDashboardQuery,
  editCityQuery,
};
