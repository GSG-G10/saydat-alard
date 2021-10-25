const isAdmin = require('./isAdmin');
const checkAuth = require('./auth');
const checkUserExist = require('./checkUserExist');
const setCookie = require('./setCookie');

module.exports = {
  checkUserExist, setCookie, isAdmin, checkAuth,
};
