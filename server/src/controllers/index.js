const { getMainCities, getCitiesNames, getProverbs } = require('./main');
const { signup, login } = require('./Auth');
const {
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
} = require('./middlewares');
<<<<<<< HEAD
const { updateStory } = require('./city');
=======
const {
  approvedStory, getDashboardProverbs, getDashboardCities, editProvebDashboard,
} = require('./dashboard');
const { getFamilies } = require('./city');
>>>>>>> ba1786a2cb3a010a5041e63d279ca15276416222

module.exports = {
  getMainCities,
  getCitiesNames,
  signup,
  login,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
<<<<<<< HEAD
  updateStory,
=======
  getFamilies,
  getProverbs,
  approvedStory,
  getDashboardProverbs,
  getDashboardCities,
  editProvebDashboard,
>>>>>>> ba1786a2cb3a010a5041e63d279ca15276416222
};
