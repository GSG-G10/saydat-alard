const approvePendingStory = require('./approverdStory');
const getStoriesQuery = require('./getStoriesQuery');
const getDashboardProverbsQuery = require('./getDashboardProverbsQuery');
const editProverbQuery = require('./editProverbQuery');
const addProverQuery = require('./addProverQuery');
const getDashboardCitiesQuery = require('./getDashboardCitiesQuery');
const deleteProverbDashboardQuery = require('./deleteProverbDashboardQuery');

module.exports = {
  approvePendingStory,
  editProverbQuery,
  getDashboardCitiesQuery,
  getDashboardProverbsQuery,
  getStoriesQuery,
  addProverQuery,
  deleteProverbDashboardQuery,
};
