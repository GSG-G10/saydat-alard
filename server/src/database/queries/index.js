const getMainCitiesQuery = require('./getMainCitiesQuery');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const { approvePendingStory, editProverbQuery } = require('./dashboard');

module.exports = {
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  approvePendingStory,
  editProverbQuery,
};
