const getUser = require('./getUser');
const { getMainCitiesQuery, getCitiesNamesQuery } = require('./mainPage');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const { getFamiliesQuery } = require('./cityPage');
const { approvePendingStory, editProverbQuery } = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');

module.exports = {
  getCitiesNamesQuery,
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getUser,
  getFamiliesQuery,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
};
