const getMainCitiesQuery = require('./getMainCitiesQuery');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const { approvePendingStory, editProverbQuery, getDashboardProverbsQuery } = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');

module.exports = {
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getDashboardProverbsQuery,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
};
