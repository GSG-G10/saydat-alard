const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup,
} = require('../controllers');

router.get('/', getMainCities);
router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
