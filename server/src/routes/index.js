const router = require('express').Router();

const {
  checkUserExist, setCookie, getMainCities, signup, approvedStory,
  isAdmin, checkAuth, getProverbs, addProverb,
  getDashboardStories, updateStory,
  getDashboardProverbs,
  getDashboardCities,
  getFamilies,
  getCitiesNames,
  editProvebDashboard,
  login,
} = require('../controllers');

router.post('/login', login);
router.get('/', getMainCities);
router.get('/dashboard/proverbs', checkAuth, isAdmin, getDashboardProverbs); // '/dashboard/proverbs?char=...&page=1';

router.get('/', getMainCities);
router.get('/dashboard/stories', getDashboardStories);
router.put('/story/:id ', checkAuth, updateStory);
router.get('/dashboard/cities', checkAuth, isAdmin, getDashboardCities); // route => /dashboard/cities?page=1

router.get('/families/:cityId', getFamilies); // route => /families/:cityId?letter=...
router.get('/search', getCitiesNames); //  route =>  /search?city=...
router.get('/proverbs', getProverbs);

router.post('/signup', checkUserExist, signup, setCookie);
router.post('/dashboard/proverb', checkAuth, addProverb);
router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard);
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);

module.exports = router;
