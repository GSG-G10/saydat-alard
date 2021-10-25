const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, checkAuth, updateStory,
} = require('../controllers');

router.get('/', getMainCities);
router.put('/story/:id ', checkAuth, updateStory);
router.post('/signup', checkUserExist, signup, setCookie);
module.exports = router;
