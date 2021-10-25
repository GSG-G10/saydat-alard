const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, getCitiesNames,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/search', getCitiesNames);

router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
