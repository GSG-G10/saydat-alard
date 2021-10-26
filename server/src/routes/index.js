const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, getFamilies,
} = require('../controllers');

router.get('/', getMainCities);

router.get('/families/:cityId', getFamilies); // route => /families/:cityId?letter=...

router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
