const approvedStory = require('./approvedStory');
const getDashboardStories = require('./getDashboardStories');
const getDashboardProverbs = require('./getDashboardProverbs');
const editProvebDashboard = require('./editProvebDashboard');
const addProverb = require('./addProverb');
const getDashboardCities = require('./getDashboardCities');
const editCityDashboard = require('./editCityData');
const deleteProvebDashboard = require('./deleteProvebDashboard');
const deleteCityDashboard = require('./deleteCityDashboard');
const deleteStoryDashboard = require('./deleteStoryDashboard');

module.exports = {
  approvedStory,
  editProvebDashboard,
  getDashboardCities,
  getDashboardProverbs,
  getDashboardStories,
  addProverb,
  editCityDashboard,
  deleteProvebDashboard,
  deleteCityDashboard,
  deleteStoryDashboard,
};
