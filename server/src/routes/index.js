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
  deleteStory,
  uploadStory,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/families/:cityId', getFamilies); // route => /families/:cityId?letter=...
router.get('/search', getCitiesNames); //  route =>  /search?city=...
router.get('/proverbs', getProverbs); // /proverbs?char=...&page=1'
router.get('/dashboard/proverbs', checkAuth, isAdmin, getDashboardProverbs); // '/dashboard/proverbs?char=...&page=1';
router.get('/dashboard/stories', checkAuth, isAdmin, getDashboardStories); // /dashboard/stories?page=1
router.get('/dashboard/cities', checkAuth, isAdmin, getDashboardCities); // route => /dashboard/cities?page=1

router.post('/signup', checkUserExist, signup, setCookie);
router.post('/login', login);
router.post('/dashboard/proverb', checkAuth, addProverb);
router.post('/story', checkAuth, uploadStory);

router.patch('/dashboard/proverb', checkAuth, isAdmin, editProvebDashboard); // /dashboard/proverb?id=
router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory); // /dashboard/story?id=

router.put('/story/:storyId ', checkAuth, updateStory);

router.delete('/story/:storyId', checkAuth, deleteStory);

module.exports = router;
