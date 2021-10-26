const router = require('express').Router();
const {
  checkUserExist,
  setCookie,
  getMainCities,
  signup,
  getCitiesNames,
  approvedStory,
  isAdmin,
  checkAuth,
  getProverbs,
  editProvebDashboard,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/search', getCitiesNames); //  route =>  /search?city=...
router.get('/proverbs', getProverbs);

router.post('/signup', checkUserExist, signup, setCookie);
router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard);
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);
module.exports = router;
