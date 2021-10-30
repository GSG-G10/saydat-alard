const router = require('express').Router();

const {
  checkAuth, userInfo, logout, signup, login, checkUserExist,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');

router.get('/userinfo', asyncHandler(checkAuth), asyncHandler(userInfo));
router.get('/logout', asyncHandler(logout));

router.post('/login', asyncHandler(login));
router.post('/signup', asyncHandler(checkUserExist), asyncHandler(signup));

module.exports = router;
