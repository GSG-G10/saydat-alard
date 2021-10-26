const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
const { approvedStory, editProvebDashboard } = require('./dashboard');

module.exports = {
  getMainCities,
  getCitiesNames,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  getProverbs,
  approvedStory,
  editProvebDashboard,
};
