const isAdmin = require('./isAdmin');
const checkAuth = require('./auth');
const checkUserExist = require('./checkUserExist');
const setCookie = require('./setCookie');
const asyncHandler = require('./asyncHandler');
const asyncSign = require('./asyncSignup');

module.exports = {
  checkUserExist, setCookie, isAdmin, checkAuth, asyncHandler, asyncSign,
};
