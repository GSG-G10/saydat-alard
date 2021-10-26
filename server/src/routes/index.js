const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, approvedStory,
  isAdmin, checkAuth, getProverbs, getCityData, editProvebDashboard,
} = require('../controllers');

router.get('/city/:cityId', getCityData);
router.get('/', getMainCities);
router.get('/proverbs', getProverbs);
router.get('/', getMainCities);
router.post('/signup', checkUserExist, signup, setCookie);
router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard);
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);
module.exports = router;
