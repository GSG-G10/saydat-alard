const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, approvedStory,
  isAdmin, checkAuth, getProverbs, addProverb,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/proverbs', getProverbs);
router.get('/', getMainCities);
router.post('/signup', checkUserExist, signup, setCookie);
router.post('/dashboard/proverb', checkAuth, addProverb);
router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard);
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);
module.exports = router;
