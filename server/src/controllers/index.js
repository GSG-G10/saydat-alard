const { getMainCities } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
const { updateStory } = require('./city');

module.exports = {
  getMainCities,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  updateStory,
};
