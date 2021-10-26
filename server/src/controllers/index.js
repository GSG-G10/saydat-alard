const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
const { getFamilies } = require('./city');
const { approvedStory, editProvebDashboard } = require('./dashboard');

module.exports = {
  getMainCities,
  getCitiesNames,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  getFamilies,
  getProverbs,
  approvedStory,
  editProvebDashboard,
};
