const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, approvedStory,
} = require('../controllers');

router.get('/', getMainCities);

router.post('/signup', checkUserExist, signup, setCookie);

router.patch('/dashboard/story', approvedStory);

module.exports = router;
