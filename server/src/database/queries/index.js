const getMainCitiesQuery = require('./getMainCitiesQuery');
const { getDashboardCitiesQuery } = require('./dashboard');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');

module.exports = {
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getDashboardCitiesQuery,
};
