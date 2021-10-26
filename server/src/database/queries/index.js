const getUser = require('./getUser');
const { getMainCitiesQuery, getCitiesNamesQuery } = require('./mainPage');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
<<<<<<< HEAD
const { approvePendingStory, editProverbQuery, addProverQuery } = require('./dashboard');
=======
const { updateStoryQuery, getFamiliesQuery } = require('./cityPage');
const {
  approvePendingStory, editProverbQuery, getDashboardCitiesQuery, getStoriesQuery,
} = require('./dashboard');
>>>>>>> 248edb9b886d67fe042dca2de5158f2eeaa2be11
const getProverbQuery = require('./getProverbQuery');

module.exports = {
  getCitiesNamesQuery,
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getStoriesQuery,
  updateStoryQuery,
  getUser,
  getDashboardCitiesQuery,
  getFamiliesQuery,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
  addProverQuery,
};
