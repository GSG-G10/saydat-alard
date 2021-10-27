const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
const {
  approvedStory, getDashboardProverbs, getDashboardCities,
<<<<<<< HEAD
  editProvebDashboard, getDashboardStories, addProverb, deleteProvebDashboard,
=======
  editProvebDashboard, getDashboardStories, addProverb, deleteCityDashboard, deleteStoryDashboard,
>>>>>>> acd079efa012409e28dbe3e8427d1285ba6a5fc9
} = require('./dashboard');
const { errors } = require('./errors');
const { getFamilies, updateStory, deleteStory } = require('./city');

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
  errors,
  deleteStory,
<<<<<<< HEAD
  deleteProvebDashboard,
=======
  deleteCityDashboard,
  deleteStoryDashboard,
>>>>>>> acd079efa012409e28dbe3e8427d1285ba6a5fc9
};
