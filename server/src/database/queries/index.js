const getMainCitiesQuery = require('./getMainCitiesQuery');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const { getStoriesQuery } = require('./dashboard');

module.exports = {
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getStoriesQuery,
};
