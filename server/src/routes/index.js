const router = require('express').Router();
const {
  getMainCities, signup, checkUserExist, setCookie,
} = require('../controllers');

router.get('/', getMainCities);
router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
