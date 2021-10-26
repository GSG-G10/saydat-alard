const getUser = require('./getUser');
const getMainCitiesQuery = require('./getMainCitiesQuery');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const { approvePendingStory, editProverbQuery } = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');

module.exports = {
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getUser,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
};
