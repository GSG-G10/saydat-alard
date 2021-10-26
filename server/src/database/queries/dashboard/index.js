const approvePendingStory = require('./approverdStory');
const getStoriesQuery = require('./getStoriesQuery');
const getDashboardProverbsQuery = require('./getDashboardProverbsQuery');
const editProverbQuery = require('./editProverbQuery');
const getDashboardCitiesQuery = require('./getDashboardCitiesQuery');

module.exports = {
  approvePendingStory,
  editProverbQuery,
  getDashboardCitiesQuery,
  getDashboardProverbsQuery,
  getStoriesQuery,
};
