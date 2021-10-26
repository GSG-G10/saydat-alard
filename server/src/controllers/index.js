const { getMainCities, getProverbs } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
const { approvedStory, editProvebDashboard } = require('./dashboard');

module.exports = {
  getMainCities,
  signup,
  login,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  getProverbs,
  approvedStory,
  editProvebDashboard,
};
