const router = require('express').Router();

const {
  checkUserExist,
  setCookie,
  getMainCities,
  signup,
  login,
} = require('../controllers');

router.post('/login', login);
router.get('/', getMainCities);
router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
