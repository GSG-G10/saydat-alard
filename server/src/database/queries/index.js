const getMainCitiesQuery = require('./getMainCitiesQuery');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const { approvePendingStory, editProverbQuery } = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');
const { getCityDataQuery } = require('./cityPage');
const { getstoryDataQuery } = require('./story');

module.exports = {
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
  getCityDataQuery,
  getstoryDataQuery,
};
